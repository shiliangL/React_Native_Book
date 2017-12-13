import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HomeView from "./src/view/homeView/homeView";
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeView />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
