import * as React from 'react';
import './CreateTemplatesDragTarget.scss';
import { connect, useSelector, useDispatch } from 'react-redux';

import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { RootState } from '../../../rtk/RootReducer';
import DraggableItem from '../../../layout/draggables/DraggableItem';
import { removeItem, updateFormTitle } from '../../../rtk/FormItemsSlice';
import { RemoveItemPayload } from '../../../utils/RemoveItemPayload';

interface ICreateTemplatesDragTargetProps {
  id: string,
}

const CreateTemplatesDragTarget: React.FunctionComponent<ICreateTemplatesDragTargetProps> = (props) => {
  
  //const dispatch = useDispatch();
  const { items_dropped, form_title } = useSelector((state: RootState) => state.form_items);
  const dispatch = useDispatch();

  const removeItemFromItemsDropped = (index: number) => {
    let payload: RemoveItemPayload = {
      index: index
    }
    dispatch(removeItem(payload))
  }

  const onItemRemove = (event: any) => {
    let index = Number(event.target.value)
    removeItemFromItemsDropped(index);
  }

  const onFormTitleInputClicked = (event: React.MouseEvent<HTMLInputElement>) => {
    if(!form_title){
      dispatch(updateFormTitle(''))
    }
  }

  const onFormTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFormTitle(event.target.value))
  }

  return (
    <Droppable
      droppableId={props.id}>
      {
        (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
          return (
            <div className={snapshot.isDraggingOver ? 'target-over' : 'target'}
              ref={provided.innerRef}>
              <input
                style={{width: '50%'}}
                className='form-title-input'
                onClick={onFormTitleInputClicked} 
                type='text' 
                onChange={onFormTitleChanged}
                value={form_title}
                placeholder='Enter template title here.' />
              {items_dropped.length === 0 ? 
                <p style={{fontSize: '0.8rem', margin: '12px 0px 8px 0px'}}><b>Drag your form components here</b></p> : 
                  items_dropped.map((item, index)=> {
                    return (
                      <DraggableItem 
                        key={item.id}
                        id={item.id}
                        index={index} 
                        title={item.title}
                        is_removable={true}
                        type={item.type}
                        field_name={item.field_name}
                        onItemRemove={onItemRemove}
                        />
                    )
                  })
              }
              {provided.placeholder}
            </div>
          )
        }
      }
    </Droppable>
  );
};

const mapState = (state: any) => state;

export default connect(mapState)(CreateTemplatesDragTarget);
