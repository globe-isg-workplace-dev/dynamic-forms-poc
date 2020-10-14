import * as React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../rtk/RootReducer';
import './CreateTemplates.scss';
import { ItemTypes } from '../../../utils/Items';

interface ICreateTemplatesFormPreviewProps {
}

const CreateTemplatesFormPreview: React.FunctionComponent<ICreateTemplatesFormPreviewProps> = (props) => {

  const { items_dropped, form_title } = useSelector((state: RootState)=> state.form_items)

  return (
    <div className='form-preview'>
      <h2 style={{margin: '0px 8px 0px 8px'}}>{!form_title ? 'Untitled memo' : form_title}</h2>
      <form className='form-preview-input-container'>
        {
          items_dropped.map((items, index)=> {
            switch(items.type){
              case ItemTypes.SHORT_TEXT:
                return (
                  <div key={items.id} style={{width: '100%', height:'auto', marginTop: '12px'}}>
                    <h5>{items.field_name}</h5>
                    <input type='text' className={ItemTypes.SHORT_TEXT} id={items.id} placeholder='Enter value here' />
                  </div>
                )
              case ItemTypes.LONG_TEXT:
                return (
                  <div key={items.id} style={{width: '100%', height:'auto', marginTop: '12px'}}>
                    <h5>{items.field_name}</h5>
                    <textarea id={items.id} className={ItemTypes.LONG_TEXT} placeholder='Enter value here' rows={3} />
                  </div>
                )
              case ItemTypes.DATE_PICKER: 
                return (
                  <div key={items.id} style={{width: '100%', height:'auto', marginTop: '12px'}}>
                    <h5>{items.field_name}</h5>
                    <input key={items.id} type='date' className={ItemTypes.DATE_PICKER} id={items.id} />
                  </div>
                )
              default: 
                return null;
            }
          })
        }
      </form>
    </div>
  )
};

export default CreateTemplatesFormPreview;
