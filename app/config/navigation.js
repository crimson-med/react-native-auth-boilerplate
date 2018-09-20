import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import Home from './../views/tabs/home.js';
import First from './../views/tabs/first.js';
import Second from './../views/tabs/second.js';

export const Tab = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  First: {
    screen: First,
  },
  Second: {
    screen: Second,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "#ff6659",
    inactiveTintColor: '#ff0000',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});
