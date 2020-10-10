import * as React from 'react';
import './CreateTemplates.scss';
import Spacer from '../../../layout/misc/Spacer';
import CreateTemplatesDragForm from './CreateTemplatesDragForm';

interface ICreateTemplatesProps {
}

const CreateTemplates: React.FunctionComponent<ICreateTemplatesProps> = (props) => {
  return (
    <div className="container">
      <h2>Create your template.</h2>
      <p>Drag and drop your designed components below</p>
      <Spacer />

      <div style={{marginTop: '16px'}}> 
        <h4>Form components</h4>
      </div>

      <CreateTemplatesDragForm />
    </div>
  );
};

export default CreateTemplates;
