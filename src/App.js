import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, Storage } from './components';
import AppNavigator from './routes';
import store from './reducers';

export default App = () => 
  <Provider store={store}>
    <StatusBar />
    <AppNavigator />
    <Storage />
  </Provider>
