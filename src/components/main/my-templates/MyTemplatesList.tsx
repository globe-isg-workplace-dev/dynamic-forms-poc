import * as React from 'react';
import './MyTemplatesList.scss';

interface IMyTemplatesList {
}

const MyTemplatesList: React.FunctionComponent<IMyTemplatesList> = (props) => {
  return (
    <div>
      <p>Check out your created templates.</p>
    </div>
  );
};

export default MyTemplatesList;
