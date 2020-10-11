import * as React from 'react';
import './NavigationItems.scss';

export interface NavigationItemsProps {
  title: string,
  link: string
}

interface INavigationItemsProps {
  items: NavigationItemsProps[]
}

const NavigationItems: React.FunctionComponent<INavigationItemsProps> = (props) => {
  return (
    <div className='links'>
      {
        props.items.map((link_item, index)=> {
          return (<a key={index} className='link' href={link_item.link}>{link_item.title}</a>)
        })
      }
    </div>
  );
};

export default NavigationItems;
