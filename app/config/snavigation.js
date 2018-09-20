import React from "react";
import { createSwitchNavigator } from "react-navigation";
import { Tab } from "./navigation";

import Index from './../views/index.js';
import Details from './../views/details.js';
import Login from './../views/login.js';

export const Stack = createSwitchNavigator({
  Index: {
    screen: Index,
  },
  Login: {
    screen: Login,
  },
  Details: {
    screen: Tab,
  },
});
