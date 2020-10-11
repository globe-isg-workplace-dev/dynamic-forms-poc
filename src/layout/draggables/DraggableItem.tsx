import * as React from 'react';
import './DraggableItem.scss';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

interface IDraggableItemProps {
  id: string,
  index: number,
  title: string,
  item_type: string,
}

const DraggableItem: React.FunctionComponent<IDraggableItemProps> = (props) => {

  return (
    <Draggable
      draggableId={props.id}
      index={props.index}>
        {
          (provided: DraggableProvided) => {
            return (
              <div 
                className='draggable-item'
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}>
                <h5>{props.title}</h5>
              </div>
            )
          }
        }
    </Draggable>
  );
};

export default DraggableItem;
