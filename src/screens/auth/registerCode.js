import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Text, Input } from "react-native-elements";
import { Formik } from "formik";
import Divider from "_common/Divider";

const authService = require("_services/auth.service");

const Yup = require("yup");

class RegisterCode extends Component {
  state = {};

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async values => {
    const data = await authService.verifyCode(values);
    if (data.hasOwnProperty("error")) {
      this.setState({ errorMessage: data.error });
      return;
    }
    await AsyncStorage.setItem("@userToken", data.token);
    await AsyncStorage.removeItem("@userKey");
    this.props.navigation.navigate("Main");
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <View style={styles.container}>
        <Formik initialValues={{ code: "" }} onSubmit={this.handleSubmit}>
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
            isValid,
            isSubmitting
          }) => (
            <View
              style={
                {
                  // display: "flex",
                  // alignItems: "center",
                  // justifyContent: "center"
                }
              }
            >
              <View
                style={{
                  alignItems: "center",
                  width: "75%"
                }}
              >
                <Text h4>Code Confirmation</Text>
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 6
                  }}
                >
                  {errorMessage && (
                    <Text style={{ color: "red" }}>{errorMessage}</Text>
                  )}
                  <Text>
                    Fill your confirmation code here, to verified that email or
                    phone number is your
                  </Text>
                </Text>
              </View>
              <Divider />
              <Input
                containerStyle={{ width: "75%" }}
                value={values.code}
                onChangeText={handleChange("code")}
                onBlur={handleBlur("code")}
                errorMessage={touched.code && errors.code}
                placeholder="place"
                inputContainerStyle={{ width: "100%" }}
                keyboardType="numeric"
                style={{ textAlign: "center", textAlignVertical: "center" }}
              />
              <Divider />

              <Button
                buttonStyle={{
                  backgroundColor: "#DB4437",
                  borderRadius: 20,
                  marginHorizontal: 10

                  // width: '100%',
                  // alignItems: 'center',
                  // justifyContent: 'center'
                }}
                titleStyle={{
                  fontSize: 18,
                  textAlign: "center"
                }}
                title="Confirm"
                onPress={handleSubmit}
              />
              <Divider />
              <Text style={{ textAlign: "center" }}>
                Resend confirmation code
              </Text>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default RegisterCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
