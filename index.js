/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from "react-redux";
import configureStore from "./utility/configureStore";

// import {name as appName} from './app.json';

const store = configureStore()

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("Magenta", () => RNRedux);

// AppRegistry.registerComponent(appName, () => App);
