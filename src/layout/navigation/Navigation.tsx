import * as React from 'react';
import NavigationBranding from './NavigationBranding';
import NavigationItems, { NavigationItemsProps } from './NavigationItems';
import './Navigation.scss';

const Navigation: React.FunctionComponent<any> = (props) => {

  const nav_links: NavigationItemsProps[] = [
    {
      title: "Home",
      link: "/app"
    },
    {
      title: "Templates",
      link: "/app/templates"
    },
    {
      title: "My memos",
      link: "#"
    },
    {
      title: "Login",
      link: "/auth"
    }
  ]

  return (
    <div className='navigation'>
      <NavigationBranding brand_name="Memo App" />
      <NavigationItems items={nav_links} />
    </div>
  );
};

export default Navigation;
