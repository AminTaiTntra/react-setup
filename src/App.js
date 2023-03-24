import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import RouterConfig from './routes/index';
import configureStore from './redux/store';

const { persistor, store } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterConfig />
      </PersistGate>
    </Provider>
  );
}

export default App;
