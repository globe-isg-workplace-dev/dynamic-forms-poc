import * as React from 'react';
import './CreateTemplatesDragOrigin.scss';
import DraggableItem from '../../../layout/draggables/DraggableItem';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

interface ICreateTemplatesDragOriginProps {
  items: Array<any>
  id: string,
}

const CreateTemplatesDragOrigin: React.FunctionComponent<ICreateTemplatesDragOriginProps> = (props) => {
  return (
    <Droppable
      droppableId={props.id}
      isDropDisabled={true}>
      {
        (provided: DroppableProvided, snapshot: DroppableStateSnapshot)=>{
          return (
            <div className='origin'
              ref={provided.innerRef}
              {...provided.droppableProps}>
              {
                props.items.map((item, index)=> {
                  return (
                    <DraggableItem 
                      key={item.id}
                      id={item.id}
                      index={index} 
                      title={item.title}
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

export default CreateTemplatesDragOrigin;
