import * as React from 'react';
import TemplatesItem from './TemplatesItem';
import './TemplatesPane.scss';
interface ITemplatesPaneProps {
}

const TemplatesPane: React.FunctionComponent<ITemplatesPaneProps> = (props) => {
  return (
    <div className='templates-pane'>
      <div className='templates'>
        <TemplatesItem name='Sample' details='sample' />
        {
          props.children
        }
      </div>
    </div>
  );
};

export default TemplatesPane;
