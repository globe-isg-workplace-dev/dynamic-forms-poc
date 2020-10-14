import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navigation from '../../layout/navigation/Navigation';
import Home from './home/Home';
import MyTemplates from './my-templates/MyTemplates';
import CreateTemplates from './create-templates/CreateTemplates';
import './Main.scss';
import CreateTemplatesFormPreview from './create-templates/CreateTemplatesFormPreview';

interface IMainProps {

}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <div>
      <Navigation />
      <Router>
        <Switch>
          <Route exact path='/app'>
            <Home />
          </Route>
          <Route exact path='/app/templates'>
            <MyTemplates />
          </Route>
          <Route exact path='/app/templates/create'>
            <CreateTemplates />
          </Route>
          <Route exact path='/app/templates/preview'>
            <CreateTemplatesFormPreview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
