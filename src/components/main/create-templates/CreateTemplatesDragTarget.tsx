import * as React from 'react';
import './CreateTemplatesDragTarget.scss';

interface ICreateTemplatesDragTargetProps {
}

const CreateTemplatesDragTarget: React.FunctionComponent<ICreateTemplatesDragTargetProps> = (props) => {

  return (
    <div 
      className='target'>
      <h5>Drag your components here.</h5>
    </div>
  );
};

export default CreateTemplatesDragTarget;
