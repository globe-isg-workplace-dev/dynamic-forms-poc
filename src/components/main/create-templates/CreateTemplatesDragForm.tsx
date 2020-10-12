import * as React from 'react';
import './CreateTemplates.scss';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'; 
import CreateTemplatesDragOrigin from './CreateTemplatesDragOrigin';
import CreateTemplatesDragTarget from './CreateTemplatesDragTarget';
import { useSelector } from 'react-redux';
import { RootState } from '../../../rtk/RootReducer';

interface ICreateTemplatesDragFormProps {
}

const CreateTemplatesDragForm: React.FunctionComponent<ICreateTemplatesDragFormProps> = (props) => {

  const { selection } = useSelector((state: RootState) => state.form_items)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if(source.droppableId === 'ORIGIN' && destination?.droppableId === 'TARGET'){
      // Copy
    }
    else if (source.droppableId === '"TARGET' && destination?.droppableId === 'TARGET'){
      // Move
    }
  }

  return  (
      <div className='form-components-container'>
        <DragDropContext
          onDragEnd={onDragEnd}>
          <CreateTemplatesDragOrigin items={selection} id='ORIGIN'/>
          <CreateTemplatesDragTarget id='TARGET'/>
        </DragDropContext>
      </div>
  );
};

export default CreateTemplatesDragForm;
