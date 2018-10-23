import ReduxServer from '@pawjs/redux/server';
import * as AppReducers from './app/reducers';

const AppInitialState = {
  counter: {
    count: 5,
  },
};


export default class Server {
  constructor({ addPlugin }) {
    const reduxServer = new ReduxServer({ addPlugin });
    reduxServer.setReducers(AppReducers);
    addPlugin(reduxServer);
  }

  apply(serverHandler) {
    serverHandler
      .hooks
      .reduxInitialState
      .tapPromise('AppInitialState', async ({ getInitialState, setInitialState }) => {
        const initialState = Object.assign({}, getInitialState(), AppInitialState);
        setInitialState(initialState);
      });
  }
}
