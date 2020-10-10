import * as React from 'react';
import './NavigationBranding.scss';

interface INavigationBrandingProps {
  brand_name: string
}

const NavigationBranding: React.FunctionComponent<INavigationBrandingProps> = (props) => {
  return (
    <div className='branding'>
      <h3>{props.brand_name}</h3>
    </div>
  );
};

export default NavigationBranding;
