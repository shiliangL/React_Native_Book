import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
import Data from "./data.json";
import Util from "../utils/utils";
let cols = 4;
let boxW = 100;
var wMargin = (Util.size.width - cols * boxW) / (cols + 1);
var hMargin = 25;

export default class HomeView extends Component {
  _renderData() {
    let renderData = Data.data;
    renderData.map((item, index) => {
      return (
        <View key={index}>
          <Text>{item.title}</Text>
        </View>
      );
    });
  }
  render() {
    return (
      <ScrollView style={styles.mainView} title={this.props.title}>
        <Text>测试</Text>
        <View>{this._renderData()}</View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  mainView: {
    marginTop: 30
  },
  navBar: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  navTitle: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "500"
  },
  navBackBtn: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 18,
    color: "#555"
  },
  itemWrapper: {
    backgroundColor: "#f3f3f3"
  },
  touchBox: {
    width: Util.size.width / 3 - 0.33334,
    height: Util.size.width / 3,
    backgroundColor: "#fff"
  },
  touchBoxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: Util.size.width,
    borderTopWidth: Util.pixel,
    borderTopColor: "#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor: "#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor: "#ccc"
  },
  touchBox1: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: "#ccc",
    borderRightWidth: Util.pixel,
    borderRightColor: "#ccc"
  },
  touchBox2: {
    borderBottomWidth: Util.pixel,
    borderBottomColor: "#ccc",
    borderLeftWidth: Util.pixel,
    borderLeftColor: "#ccc"
  },
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: Util.size.width / 3,
    height: Util.size.width / 3
  },
  boxIcon: {
    position: "relative",
    top: -10
  },
  boxText: {
    position: "absolute",
    bottom: 15,
    width: Util.size.width / 3,
    textAlign: "center",
    left: 0,
    backgroundColor: "transparent"
  },
  slide: {
    flexGrow: 1,
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  slideText: {
    position: "absolute",
    bottom: 0,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
    width: Util.size.width,
    textAlign: "center",
    fontSize: 12
  },
  image: {
    width: Util.size.width,
    flexGrow: 1,
    alignSelf: "stretch"
  }
});
