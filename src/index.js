import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
ReactDOM.render(
    <HashRouter basename='/'>
      <Route render={({ location }) => (
          <ScrollToTop>
            <App location={location}/>
          </ScrollToTop>
      )}/>
    </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();

