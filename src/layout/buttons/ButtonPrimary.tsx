import * as React from 'react';
import './Buttons.scss';

interface IButtonPrimaryProps {
  title: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
  style: React.CSSProperties
}

const ButtonPrimary: React.FunctionComponent<IButtonPrimaryProps> = (props) => {
  return (
    <button style={props.style} className='btn-primary' onClick={props.onClick}>{props.title}</button>
  );
};

export default ButtonPrimary;
