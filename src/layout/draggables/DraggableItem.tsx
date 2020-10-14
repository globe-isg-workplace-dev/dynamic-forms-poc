import * as React from 'react';
import './DraggableItem.scss';
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import DraggablePlaceholder from './DraggablePlaceholder';
import { useDispatch, useSelector } from 'react-redux';
import { updateFieldName } from '../../rtk/FormItemsSlice';
import { UpdateFieldNamePayload } from '../../utils/UpdateItemFieldNamePayload';
import { RootState } from '../../rtk/RootReducer';

interface IDraggableItemProps {
  id: string,
  index: number,
  title: string,
  type: string,
  field_name: string,
  is_removable?: boolean,
  onItemRemove?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const DraggableItem: React.FunctionComponent<IDraggableItemProps> = (props) => {

  const { items_dropped } = useSelector((state: RootState) => state.form_items)
  const dispatch = useDispatch();

  const updateField = (id: string, new_field_name: string) => {
    let payload: UpdateFieldNamePayload = {
      id: id,
      new_field_name: new_field_name
    }
    dispatch(updateFieldName(payload))
    console.log(items_dropped)
  }
  const onFieldNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let field_name = event.target.value;
    updateField(props.id, field_name)
  }

  return (
    <Draggable
      draggableId={props.id}
      index={props.index}>
        {
          (provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
            return (
              <React.Fragment>
                <div 
                  ref={provided.innerRef}
                  data-is-dragging={snapshot.isDragging}
                  className={snapshot.isDragging ? 'draggable-item-active' : 'draggable-item'}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}>
                  
                  {
                    props.is_removable ? 
                    (
                      <div style={{width: '100%', display: 'flex', flexDirection: "column"}}>
                        <h5>Enter field name:</h5>
                        <input className='draggable-input' type='text' onChange={onFieldNameChange} value={props.field_name}/>
                        <p className='draggable-type-text'>{props.type}</p>
                      </div>                        
                    ) : 
                    <h5>{props.title}</h5>
                  }
                  {
                    props.is_removable ? 
                    <button className='draggable-remove-btn' onClick={props.onItemRemove} value={props.index}>Remove</button> :
                    null
                  }
                </div>
                {snapshot.isDragging && (<DraggablePlaceholder title={props.title} />)}
              </React.Fragment>
            )
          }
        }
    </Draggable>
  );
};

export default DraggableItem;
