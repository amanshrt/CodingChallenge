/**
 *Learnfield Coding Challenge
 **/
import React from 'react';
import {View} from 'react-native';
import Router from './src/Config/router';
import { Provider } from 'react-redux';
import { store } from './src/Config/store';

const App= () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
