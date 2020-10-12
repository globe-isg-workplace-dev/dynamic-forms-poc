import * as React from 'react';
import './CreateTemplatesDragTarget.scss';
import { connect, useSelector } from 'react-redux';

import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { RootState } from '../../../rtk/RootReducer';

interface ICreateTemplatesDragTargetProps {
  id: string,
}

const CreateTemplatesDragTarget: React.FunctionComponent<ICreateTemplatesDragTargetProps> = (props) => {
  
  //const dispatch = useDispatch();
  const { items_dropped } = useSelector((state: RootState) => state.form_items);

  return (
    <Droppable
      droppableId={props.id}>
      {
        (provided: DroppableProvided) => {
          return (
            <div className='target'
              ref={provided.innerRef}>
              {items_dropped.length === 0 ? <h4>Drag your form components here</h4> : items_dropped[0]}
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
