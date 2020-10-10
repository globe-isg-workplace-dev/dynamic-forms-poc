import * as React from 'react';
import './MyTemplates.scss';
import MyTemplatesEmpty from './MyTemplatesEmpty';
import MyTemplatesList from './MyTemplatesList';

interface IMyTemplatesProps {
}

const MyTemplates: React.FunctionComponent<IMyTemplatesProps> = (props) => {

  let my_templates: any = []


  return (
    <div className='container'>
      <h2>Your templates</h2>
      {
        my_templates.length > 0 ? (
          <MyTemplatesList />
        ) : (
          <MyTemplatesEmpty />
        )
      }
    </div>
  );
};

export default MyTemplates;
