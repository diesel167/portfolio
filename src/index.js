import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from 'react-router-dom';
ReactDOM.render(
    <HashRouter >
      <Route render={({ location }) => (
          <App location={location}/>
      )}/>

    </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();

