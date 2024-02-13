import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AgentApp from './components/AgentApp';
import CallPage from './components/CallPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <>
  <Switch>
      <Route exact path="/" component={AgentApp} />
      <Route path="/call" component={CallPage} />
  </Switch>
  </>
  </BrowserRouter>
);
