import * as React from 'react';
import './CreateTemplatesDragTarget.scss';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';

interface ICreateTemplatesDragTargetProps {
  id: string
}

const CreateTemplatesDragTarget: React.FunctionComponent<ICreateTemplatesDragTargetProps> = (props) => {

  return (
    <Droppable
      droppableId={props.id}>
      {
        (provided: DroppableProvided) => {
          return (
            <div className='target'
              ref={provided.innerRef}>
              <h5>Drag your components here.</h5>

              {provided.placeholder}
            </div>
          )
        }
      }
    </Droppable>
  );
};

export default CreateTemplatesDragTarget;
