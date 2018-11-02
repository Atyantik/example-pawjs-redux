import ReduxServer from '@pawjs/redux/server';
import * as reducers from './app/reducers';
import React from 'react';
import FavIcon from './resources/img/favicon.ico';

const appInitialState = {};


export default class Server {
  constructor({ addPlugin }) {
    const reduxServer = new ReduxServer({ addPlugin });
    reduxServer.setReducers(reducers);
    addPlugin(reduxServer);
  }

  apply(serverHandler) {
    serverHandler
      .hooks
      .reduxInitialState
      .tapPromise('AppInitialState', async ({ getInitialState, setInitialState }) => {
        const initialState = Object.assign({}, getInitialState(), appInitialState);
        setInitialState(initialState);
      });

    serverHandler.hooks.beforeHtmlRender.tap('AddGoogleAnalytics', (Application) => {
      Application.htmlProps.head.push(
        <link key="favicon" rel="shortcut icon" type="image/x-icon" href={FavIcon} />,
        <script key="addGoogleAnalytics" async src="https://www.google-analytics.com/analytics.js" />,
      );
      return Application;
    });
  }
}
