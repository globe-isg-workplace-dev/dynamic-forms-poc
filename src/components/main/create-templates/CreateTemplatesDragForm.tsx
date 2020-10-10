import * as React from 'react';
import './CreateTemplates.scss';
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

  return  (
      <div className='form-components-container'>
        <CreateTemplatesDragOrigin items={items}/>

        <CreateTemplatesDragTarget />
      </div>
  );
};

export default CreateTemplatesDragForm;
