import React, { Component } from "react";
// import { View } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import AppIndicator from "../loading";

class AuthLoadingScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = async () => {
    // await AsyncStorage.removeItem('@userToken')
    // await AsyncStorage.removeItem('@userKey')
    // return this.props.navigation.navigate('Register')
    const token = await AsyncStorage.getItem("@userToken");
    if (token) return this.props.navigation.navigate("Main");
    const key = await AsyncStorage.getItem("@userKey");
    this.props.navigation.navigate(key ? "RegisterCode" : "Auth");
  };

  render() {
    return <AppIndicator />;
  }
}

export default AuthLoadingScreen;
