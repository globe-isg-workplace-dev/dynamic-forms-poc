import * as React from 'react';
import './DraggableItem.scss';

interface IDraggableItemProps {
  id?: string,
  title: string,
  item_type: string
}

const DraggableItem: React.FunctionComponent<IDraggableItemProps> = (props) => {

  return (
    <div 
      className='draggable-item'>
        <h5>{props.title}</h5>
    </div>
  );
};

export default DraggableItem;
