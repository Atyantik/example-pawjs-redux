import ReduxClient from '@pawjs/redux/client';
import * as AppReducers from './app/reducers';


const AppInitialState = {
  counter: {
    count: 5,
  },
};
export default class Client {
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
        const initialState = Object.assign({}, getInitialState(), AppInitialState);
        setInitialState(initialState);
      });
  }
}
