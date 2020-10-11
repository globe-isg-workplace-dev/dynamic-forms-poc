import * as React from 'react';
import './CreateTemplates.scss';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'; 
import { ItemTypes } from '../../../utils/Items';
import CreateTemplatesDragOrigin from './CreateTemplatesDragOrigin';
import CreateTemplatesDragTarget from './CreateTemplatesDragTarget';

interface ICreateTemplatesDragFormProps {
}

const CreateTemplatesDragForm: React.FunctionComponent<ICreateTemplatesDragFormProps> = (props) => {

  const [items, setItems] = React.useState([
    {
      id: '1',
      title: "Short Text",
      item_type: ItemTypes.SHORT_TEXT,
    },
    {
      id: '2',
      title: "Long Text",
      item_type: ItemTypes.LONG_TEXT,
    },
    {
      id: '3',
      title: "Date Picker",
      item_type: ItemTypes.DATE_PICKER,
    }
  ])

  const onDragEnd = (result: DropResult) => {
    console.log(result);
  }

  return  (
      <div className='form-components-container'>
        <DragDropContext
          onDragEnd={onDragEnd}>
          <CreateTemplatesDragOrigin items={items} id='ORIGIN'/>
          <CreateTemplatesDragTarget id='TARGET'/>
        </DragDropContext>
      </div>
  );
};

export default CreateTemplatesDragForm;
