import * as React from 'react';
import './DraggableItem.scss';

interface IDraggablePlaceholderProps {
  title: string
}

const DraggablePlaceholder: React.FunctionComponent<IDraggablePlaceholderProps> = (props) => {
  return (
    <div className='draggable-item'>
      <h5>{props.title}</h5>
    </div>
  );
};

export default DraggablePlaceholder;
