import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ListView
} from "react-native";
import Util from "../../utils/utils";
const { width, height } = Dimensions.get("window");

export default class WatchRecord extends Component {

  render() {
    let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      theDataSource = ds.cloneWithRows(this.props.record);
    return (
      <ListView
        style={styles.recordList}
        dataSource={theDataSource}
        renderRow={rowData => (
          <View style={styles.recordItem}>
            <Text style={styles.recordItemTitle}>{rowData.title}</Text>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.recordItemTime}>{rowData.time}</Text>
            </View>
          </View>
        )}
      />
    );
  }
}
const styles = StyleSheet.create({
  recordList: {
    width: Util.size.width,
    height: Util.size.height - 300,
    paddingLeft: 15
  },
  recordItem: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  recordItemTitle: {
    backgroundColor: "transparent",
    textAlign: "left",
    color: "#777"
  },
  recordItemTime: {
    backgroundColor: "transparent",
    textAlign: "right",
    color: "#222"
  }
});
