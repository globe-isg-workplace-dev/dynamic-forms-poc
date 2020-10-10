import * as React from 'react';
import './CreateTemplatesDragOrigin.scss';
import DraggableItem from '../../../layout/draggables/DraggableItem';

interface ICreateTemplatesDragOriginProps {
  items: Array<any>
}

const CreateTemplatesDragOrigin: React.FunctionComponent<ICreateTemplatesDragOriginProps> = (props) => {
  return (
    <div className='origin'>
      {
        props.items.map((item)=> {
          return <DraggableItem key={item.id} title={item.title} item_type={item.item_type} />
        })
      }
    </div>
  );
};

export default CreateTemplatesDragOrigin;
