import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Auth from './components/auth/Auth';
import Main from './components/main/Main';
import './App.scss';

const App: React.FunctionComponent<any> = (props) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to ='/app' />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/app">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
