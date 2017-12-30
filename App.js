import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HomeView from "./src/view/homeView/homeView";
import { StackNavigator, TabNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./src/view/homeView/homeView";
import Girls from "./src/view/girlsView/girlsView";
import Travel from "./src/view/travelView/travelView"
import MyZone from "./src/view/myZoneView/myZoneView";
//day堆栈导航
import WatchControl from "./src/view/30ViewPage/day-01";


//定义tabs底部切换
const tabsView = TabNavigator(
  {
    全部: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-keypad" : "ios-keypad-outline"}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },
    福利: {
      screen: Girls,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-keypad" : "ios-keypad-outline"}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },
    拓展: {
      screen: Travel,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-keypad" : "ios-keypad-outline"}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    },
    我的: {
      screen: MyZone,
      navigationOptions: {
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-keypad" : "ios-keypad-outline"}
            size={24}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    lazy: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#e91f62",
      inactiveTintColor: "#999",
      swipeEnabled: true,
      showIcon: true,
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
);
//定义堆叠导航视图
const App = StackNavigator({
  Home: {
    screen: tabsView
  },
  WatchControl: {
    screen: WatchControl
  }
});

export default App;

