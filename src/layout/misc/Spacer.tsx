import * as React from 'react';
import './Spacer.scss';

interface ISpacerProps {
}

const Spacer: React.FunctionComponent<ISpacerProps> = (props) => {
  return (
    <div className="spacer"></div>
  );
};

export default Spacer;
