/**
 *Learnfield Coding Challenge
 **/
import React from 'react';
import {View} from 'react-native';
import Router from './src/Config/router';
import { Provider } from 'react-redux';
import { store } from './src/Config/store';
import Toast from 'react-native-toast-message';


const App= () => {
  return (
    <Provider store={store}>
      <Router />
      <Toast />
    </Provider>
  );
};

export default App;
