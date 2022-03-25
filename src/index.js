import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppRegistry } from "react-native";


import App from './MyApp'
import SignInScreen from './login'
import MyStack from './Nav'
AppRegistry.registerComponent("App", () => MyStack);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});

