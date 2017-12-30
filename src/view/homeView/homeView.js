import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Data from "./data.json";
import Util from "../utils/utils";
import Swiper from "react-native-swiper";
export default class HomeView extends Component {
  test() {
    console.log("测试");
  }

  render() {
    let renderData = Data.data;
    return (
      <ScrollView style={styles.mainView} title={this.props.title}>
        <View style={stylesSiders.siderBox}>
          <Swiper
            style={stylesSiders.wrapper}
            autoplay={true}
            autoplayTimeout={3}
          >
            <View style={stylesSiders.slide1}>
              <Text style={stylesSiders.text}>Hello Swiper</Text>
            </View>
            <View style={stylesSiders.slide2}>
              <Text style={stylesSiders.text}>Beautiful</Text>
            </View>
            <View style={stylesSiders.slide3}>
              <Text style={stylesSiders.text}>And simple</Text>
            </View>
            <View style={stylesSiders.slide2}>
              <Text style={stylesSiders.text}>Beautiful4</Text>
            </View>
          </Swiper>
        </View>
        <View style={styles.touchBoxContainer}>
          {renderData.map((item, index) => {
            return (
              <TouchableHighlight
                key={index}
                style={[
                  styles.touchBox,
                  index % 3 == 2 ? styles.touchBox2 : styles.touchBox1
                ]}
              >
                <View style={styles.boxContainer}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    // marginTop: 30
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
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
const stylesSiders = {
  siderBox: {
    height: 200
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
};
