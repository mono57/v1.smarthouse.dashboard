import React, { Component } from "react";
import { View, Picker, KeyboardAvoidingView } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Icon, Text } from "react-native-elements";
import { getDeviceTypes, addDevice } from "_services/device.service";
import { Formik } from "formik";
import { StyledView, StyledInput, StyledButton } from '_styled';
import { connect } from 'react-redux';
import { getDeviceList } from "_redux/actions/devices";

import base from "_styles/base";
import Divider from "_common/Divider";
import AppIndicator from "../loading";

const Yup = require("yup");

class AddDeviceForm extends Component {

  state = {
    deviceTypes: null,
    selectedDeviceType: null
  };

  deviceSchema = Yup.object().shape({
    name: Yup.string()
      .required()
      .label("Device name"),
    serial_number: Yup.string()
      .required()
      .min(10)
      .label("Serial number")
  });

  static navigationOptions = ({ navigation }) => ({
    title: "New Device",
    headerRight: () => {
      return (
        <View style={[base.dFlex, base.flexRow, { paddingRight: 20 }]}>
          <Icon
            name="qrcode-scan"
            type="material-community"
            color="white"
            size={25}
            onPress={() => navigation.navigate("ScanDevice")}
          />
        </View>
      );
    }
  });

  async componentDidMount() {
    const deviceTypes = await getDeviceTypes();
    // console.log(deviceTypes);
    this.setState({
      deviceTypes: deviceTypes,
      selectedDeviceType: deviceTypes[0]._id
    });
  }

  handleSubmit = async values => {
    const { selectedDeviceType } = this.state;
    const { getDeviceList } = this.props;

    values.type = selectedDeviceType;
    const token = await AsyncStorage.getItem("@userToken");
    const data = await addDevice(values, token);
    // console.log(data)
    getDeviceList(token);
    return this.props.navigation.navigate("Home");
  };

  render() {
    const { deviceTypes, selectedDeviceType } = this.state;
    if (deviceTypes !== null && deviceTypes.length) {
      return (
        //   <KeyboardAvoidingView style={{ flex: 1 }}>
        <StyledView>
          <Divider size={40} />

          <Formik
            initialValues={{ name: "", serial_number: "" }}
            validationSchema={this.deviceSchema}
            onSubmit={this.handleSubmit}
          >
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
              <>
                <StyledInput
                  value={values.name}
                  placeholder="Device name"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  errorMessage={touched.name && errors.name}
                />

                <Divider />

                <Picker
                  selectedValue={selectedDeviceType}
                  style={{width:"100%"}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ selectedDeviceType: itemValue })
                  }
                >
                  {deviceTypes.map(deviceType => (
                    <Picker.Item
                      label={deviceType.name}
                      value={deviceType._id}
                      key={deviceType._id}
                    />
                  ))}
                  {/* <Picker.Item label={"kontak"} value={2} /> */}
                </Picker>
                <Divider />

                <StyledInput
                  value={values.serial_number}
                  placeholder="Device Serial Number"
                  onChangeText={handleChange("serial_number")}
                  onblur={handleBlur("serial_number")}
                  errorMessage={touched.serial_number && errors.serial_number}
                />
                <Divider size={40} />
                <StyledButton
                  title="Save device"
                  buttonStyle={[base.bgSecondary, base.radius20]}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  onPress={handleSubmit}
                />

                <Divider />
                <Text style={[base.textCenter]}>Or</Text>
                <Divider />
                <Text
                  style={[
                    base.textCenter,
                    base.size18,
                    base.primary,
                    base.text
                  ]}
                  onPress={() => this.props.navigation.navigate('ScanDevice')}
                >
                  Scan device QR Code
                </Text>

                <Divider size={30} />
              </>
            )}
          </Formik>
        </StyledView>

        //   </KeyboardAvoidingView>
      );
    }
    return <AppIndicator />;
  }
}

export default connect(null, { getDeviceList })(AddDeviceForm);
