
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import Util from "../../utils/utils";

const { width, height } = Dimensions.get("window");

export default class WatchFace extends Component {
  render() {
    return <View style={styles.watchFaceContainer}>
        <Text style={styles.sectionTime}>{this.props.sectionTime}</Text>
        <Text style={styles.totalTime}>{this.props.totalTime}</Text>
      </View>;
  }
}
const WatchFacePropTypes = {
  sectionTime: PropTypes.string.isRequired,
  totalTime: PropTypes.string.isRequired
};
WatchFace.propTypes = WatchFacePropTypes;

const styles = StyleSheet.create({
  watchFaceContainer: {
    width: Util.size.width,
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 40,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    height: 170
  },
  sectionTime: {
    fontSize: 20,
    fontWeight: "100",
    paddingRight: 30,
    color: "#555",
    position: "absolute",
    left: Util.size.width - 140,
    top: 30
  },
  totalTime: {
    fontSize: Util.size.width === 375 ? 70 : 60,
    fontWeight: "100",
    color: "#222",
    paddingLeft: 20
  }
});
