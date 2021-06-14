import { Hello } from '@shared/Hello'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <Router>
        <Switch>
          <Route path="/" component={Hello} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
