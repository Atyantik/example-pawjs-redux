import ReduxClient from '@pawjs/redux/client';
import * as AppReducers from './app/reducers';


const appInitialState = {};

export default class Client {
  trackPageView() {
    const { ga } = window;
    if (typeof ga !== 'undefined' && ga) {
      ga('send', {
        hitType: 'pageview',
        page: window.location.pathname,
      });
    }
  }

  constructor({ addPlugin }) {
    const reduxClient = new ReduxClient({ addPlugin });
    reduxClient.setReducers(AppReducers);

    addPlugin(reduxClient);
  }

  apply(clientHandler) {
    clientHandler
      .hooks
      .reduxInitialState
      .tapPromise('ReduxInitialState', async ({ getInitialState, setInitialState }) => {
        const initialState = Object.assign({}, getInitialState(), appInitialState);
        setInitialState(initialState);
      });

    clientHandler.hooks.renderComplete.tap('InitTracking', () => {
      window.ga = window.ga || function () {
        (window.ga.q = window.ga.q || []).push(arguments);
      };
      window.ga.l = +new Date();
      window.ga('create', 'UA-108804791-1', 'auto');
      window.ga('send', 'pageview', window.location.pathname);
    });

    clientHandler.hooks.locationChange.tapPromise('ReInitAds', async () => {
      this.trackPageView();
    });
  }
}
