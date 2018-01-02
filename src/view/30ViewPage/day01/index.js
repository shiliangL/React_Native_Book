import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Util from "../../utils/utils";
import PropTypes from "prop-types";
 
//组件
import WatchFace from "./WatchFace";
import WatchControl from "./WatchControl";
import WatchRecord from './WatchRecord'

class StopWatch extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "秒表"
  });
  constructor(props) {
    super(props);
    this.state = {
      stopWatch: false,
      resetWatch: true,
      intialTime: 0,
      currentTime: 0,
      recordTime: 0,
      timeAccumulation: 0,
      totalTime: "00:00.00",
      sectionTime: "00:00.00",
      recordCounter: 0,
      record: [{title:"",time:""}]
    };
  }

  _startWatch() {
    if (this.state.resetWatch) {
      this.setState({
        stopWatch: false,
        resetWatch: false,
        timeAccumulation: 0,
        initialTime: new Date().getTime()
      });
    } else {
      this.setState({
        stopWatch: false,
        initialTime: new Date().getTime()
      });
    }
    let milSecond,
      second,
      minute,
      countingTime,
      secmilSecond,
      secsecond,
      secminute,
      seccountingTime;
    let interval = setInterval(() => {
      this.setState({
        currentTime: new Date().getTime()
      });
      countingTime =
        this.state.timeAccumulation +
        this.state.currentTime -
        this.state.initialTime;
      minute = Math.floor(countingTime / (60 * 1000));
      second = Math.floor((countingTime - 6000 * minute) / 1000);
      milSecond = Math.floor((countingTime % 1000) / 10);
      seccountingTime = countingTime - this.state.recordTime;
      secminute = Math.floor(seccountingTime / (60 * 1000));
      secsecond = Math.floor((seccountingTime - 6000 * secminute) / 1000);
      secmilSecond = Math.floor((seccountingTime % 1000) / 10);
      this.setState({
        totalTime:
          (minute < 10 ? "0" + minute : minute) +
          ":" +
          (second < 10 ? "0" + second : second) +
          "." +
          (milSecond < 10 ? "0" + milSecond : milSecond),
        sectionTime:
          (secminute < 10 ? "0" + secminute : secminute) +
          ":" +
          (secsecond < 10 ? "0" + secsecond : secsecond) +
          "." +
          (secmilSecond < 10 ? "0" + secmilSecond : secmilSecond)
      });
      if (this.state.stopWatch) {
        this.setState({
          timeAccumulation: countingTime
        });
        clearInterval(interval);
      }
    }, 10);
  }

  _stopWatch() {
    this.setState({
      stopWatch: true
    });
  }

  _addRecord() {
    let { recordCounter, record } = this.state;
    recordCounter++;
    if (recordCounter < 8) {
      record.pop({
        title: "计次" + recordCounter,
        time: this.state.sectionTime
      });
    }
    record.unshift({
      title: "计次" + recordCounter,
      time: this.state.sectionTime
    });
    this.setState({
      recordTime:
        this.state.timeAccumulation +
        this.state.currentTime -
        this.state.initialTime,
      recordCounter: recordCounter,
      record: record
    });
    console.log(record);
  }

  _clearRecord() {
    this.setState({
      stopWatch: false,
      resetWatch: true,
      intialTime: 0,
      currentTime: 0,
      recordTime: 0,
      timeAccumulation: 0,
      totalTime: "00:00.00",
      sectionTime: "00:00.00",
      recordCounter: 0,
      record: [{ title: "", time: "" }]
    });
  }

  render() {
    return <View>
        <WatchFace totalTime={this.state.totalTime} sectionTime={this.state.sectionTime} />
        <WatchControl addRecord={() => {
            this._addRecord();
          }} clearRecord={() => {
            this._clearRecord();
          }} startWatch={() => {
            this._startWatch();
          }} stopWatch={() => {
            this._stopWatch();
          }} />
        <WatchRecord record={this.state.record} />
      </View>;
  }
}
const styles = StyleSheet.create({
  watchContainer: {
    alignItems: "center",
    backgroundColor: "#f3f3f3",
    marginTop: 60
  },
});
export default StopWatch;
