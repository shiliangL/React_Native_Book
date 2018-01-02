import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from "react-native";
import PropTypes from "prop-types";
import Util from "../../utils/utils";

const { width, height } = Dimensions.get("window");

export default class WatchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      watchOn: false,
      startBtnText: "启动",
      startBtnColor: "#60B644",
      stopBtnText: "计次",
      underlayColor: "#fff"
    };
  }

  _startWatch() {
    if (!this.state.watchOn) {
      this.props.startWatch();
      this.setState({
        startBtnText: "停止",
        startBtnColor: "#ff0044",
        stopBtnText: "计次",
        underlayColor: "#eee",
        watchOn: true
      });
    } else {
      this.props.stopWatch();
      this.setState({
        startBtnText: "启动",
        startBtnColor: "#60B644",
        stopBtnText: "复位",
        underlayColor: "#eee",
        watchOn: false
      });
    }
  }
  _addRecord() {
    if (this.state.watchOn) {
      //组件定义触发接口
      this.props.addRecord();
    } else {
      //组件定义触发接口
      this.props.clearRecord();
      this.setState({ stopBtnText: "计次" });
    }
  }
  render() {
    return (
      <View style={styles.watchControlContainer}>
        <View>
          <TouchableHighlight
            style={styles.btnStop}
            underlayColor={this.state.underlayColor}
            onPress={() => this._addRecord()}
          >
            <Text style={styles.btnStopText}>{this.state.stopBtnText}</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
            style={styles.btnStart}
            underlayColor="#eee"
            onPress={() => this._startWatch()}
          >
            <Text
              style={[
                styles.btnStartText,
                {
                  color: this.state.startBtnColor
                }
              ]}
            >
              {this.state.startBtnText}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const WatchControlPropTypes = {
  stopWatch: PropTypes.func.isRequired,
  startWatch: PropTypes.func.isRequired,
  clearRecord: PropTypes.func.isRequired,
  addRecord: PropTypes.func.isRequired
};
WatchControl.propTypes = WatchControlPropTypes;

const styles = StyleSheet.create({
  watchControlContainer: {
    width: Util.size.width,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#f3f3f3"
  },
  btnStop: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  btnStopText: {
    fontSize: 14,
    backgroundColor: "transparent",
    color: "#555"
  },
  btnStart: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  btnStartText: {
    fontSize: 14,
    backgroundColor: "transparent"
  }
});
