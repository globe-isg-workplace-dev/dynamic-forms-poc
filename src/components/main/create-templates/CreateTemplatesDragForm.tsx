import * as React from 'react';
import './CreateTemplates.scss';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'; 
import CreateTemplatesDragOrigin from './CreateTemplatesDragOrigin';
import CreateTemplatesDragTarget from './CreateTemplatesDragTarget';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../rtk/RootReducer';
import { copyItem, moveItem } from '../../../rtk/FormItemsSlice';
import { SelectionItems } from '../../../utils/SelectionItems';
import { MoveItemPayload } from '../../../utils/MoveItemPayload';
import ButtonPrimary from '../../../layout/buttons/ButtonPrimary';
import { useHistory } from 'react-router-dom';
import { CopyItemPayload } from '../../../utils/CopyItemPayload';

interface ICreateTemplatesDragFormProps {
}

const CreateTemplatesDragForm: React.FunctionComponent<ICreateTemplatesDragFormProps> = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { selection, items_dropped } = useSelector((state: RootState) => state.form_items);

  const copyItems = (source_index: number, destination_index: number, item: SelectionItems) => {
    let payload: CopyItemPayload = {
      source_index: source_index,
      destination_index: destination_index,
      item: item
    }
    dispatch(copyItem(payload))
  }
  const moveItems = (source_index: number, destination_index: number, item: SelectionItems) => {
    let payload: MoveItemPayload = {
      source_index: source_index,
      destination_index: destination_index,
      item: item
    }
    dispatch(moveItem(payload))
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if(source.droppableId === 'ORIGIN' && destination?.droppableId === 'TARGET'){
      // Copy'
      const item_index = source.index;
      let item: SelectionItems = {
        ...selection[item_index],
        id: Date.now().toString()
      }
      copyItems(source.index, destination.index, item);
    }
    else if (source.droppableId === 'TARGET' && destination?.droppableId === 'TARGET'){
      // Move
      let source_index = source.index;
      let destination_index = destination.index;
      let item = items_dropped[source_index];
      console.log('moving')
      moveItems(source_index, destination_index, item)
    }

  }

  const previewForm = () => {
    history.push('/app/templates/preview');
  }

  return  (
      <div className='form-components-container'>
        <DragDropContext
          onDragEnd={onDragEnd}>
          <div className='form-droppables'>
            <CreateTemplatesDragOrigin items={selection} id='ORIGIN'/>
            <CreateTemplatesDragTarget id='TARGET'/>
          </div>
        </DragDropContext>
        <ButtonPrimary style={{marginTop: '16px'}} onClick={previewForm} title={"Preview"}></ButtonPrimary>
      </div>
  );
};

export default CreateTemplatesDragForm;
