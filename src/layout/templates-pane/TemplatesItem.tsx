import * as React from 'react';
import './TemplatesItem.scss';

interface ITemplatesItemProps {
  name: string,
  details: string,
}

const TemplatesItem: React.FunctionComponent<ITemplatesItemProps> = (props) => {
  return (
    <div className='template-item'>
      <div className='template-text'>
        <h4>{props.name}</h4>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default TemplatesItem;
