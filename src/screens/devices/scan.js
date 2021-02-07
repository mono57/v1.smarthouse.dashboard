import React, { Component } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Icon } from "react-native-elements";
import base from "../../styles/base";

class ScanDevice extends Component {
  state = {};

  static navigationOptions = ({ navigation }) => ({
    title: "New Device",
    headerRight: () => {
      return (
        <View style={[base.dFlex, base.flexRow, { paddingRight: 20 }]}>
          <Icon
            name="ios-add-circle-outline"
            type='ionicon'
            color="white"
            size={33}
            onPress={() => navigation.navigate("AddDevice")}
          />
        </View>
      );
    }
  });

  render() {
    return <KeyboardAvoidingView style={{ flex: 1 }}></KeyboardAvoidingView>;
  }
}

export default ScanDevice;
