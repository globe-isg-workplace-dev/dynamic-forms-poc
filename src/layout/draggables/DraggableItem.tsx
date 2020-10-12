import * as React from 'react';
import './DraggableItem.scss';

import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import DraggablePlaceholder from './DraggablePlaceholder';

interface IDraggableItemProps {
  id: string,
  index: number,
  title: string,
}

const DraggableItem: React.FunctionComponent<IDraggableItemProps> = (props) => {

  return (
    <Draggable
      draggableId={props.id}
      index={props.index}>
        {
          (provided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
            return (
              <React.Fragment>
                <div 
                  className='draggable-item'
                  ref={provided.innerRef}
                  data-is-dragging={snapshot.isDragging}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}>
                  <h5>{props.title}</h5>
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
