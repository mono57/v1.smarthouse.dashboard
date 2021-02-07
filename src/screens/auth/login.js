import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import AsyncStorage from '@react-native-community/async-storage';
import base from '_styles/base';
import {Formik} from 'formik';
import {SocialIcon} from 'react-native-elements';

import authService from '_services/auth.service';
import Divider from '_common/Divider';

import {StyledInput, StyledButton, Title, Title1, StyledView} from '_styled';

import * as Yup from 'yup';

export default class Login extends Component {
  state = {
    errorMessage: null
  };

  UserLoginSchema = Yup.object().shape({
    phone_or_email: Yup.string()
      .required()
      .label('Email or telephone'),
    password: Yup.string()
      .required()
      // .min(8)
      .label('Password'),
  });

  async componentDidMount() {
    // const data = await authService.getUsers()
    // console.log(data)
  }

  handleChange = value => {
    console.log(value);
  };

  handleLogin = async () => {};

  handleOnFocus = () => {

    const {errorMessage} = this.state;
    console.log('Focus change')
    if(errorMessage) this.setState({errorMessage: null})

  }

  handleSubmit = async (values, actions) => {
    const data = await authService.login(values);
    if (data.hasOwnProperty('error')) {
      this.setState({errorMessage: data.error});
      return;
    }
    console.log(data);
    await AsyncStorage.setItem('@userToken', data.token);
    this.props.navigation.navigate('Main');
  };

  render() {
    const {errorMessage} = this.state;
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Formik
            initialValues={{phone_or_email: '', password: ''}}
            onSubmit={this.handleSubmit}
            validationSchema={this.UserLoginSchema}>
            {({
              values,
              handleSubmit,
              handleChange,
              handleBlur,
              errors,
              touched,
              isValid,
              isSubmitting,
            }) => (
              <StyledView style={{width: '90%', height: '100%'}}>
                
                <Title1 bold>Log In</Title1>
                {/* <Divider /> */}
                <Title>Let's get to work</Title>
                <Divider />

                {errorMessage && (
                  <View>
                    <Title style={{color: 'red', textAlign: 'center'}}>
                      {errorMessage}
                    </Title>
                  </View>
                )}

                <StyledInput
                  autoCapitalize="none"
                  placeholder="Identifier"
                  value={values.phone_or_email}
                  onChangeText={handleChange('phone_or_email')}
                  onBlur={handleBlur('phone_or_email')}
                  errorMessage={touched.phone_or_email && errors.phone_or_email}
                  onFocus={this.handleOnFocus}
                />

                <Divider size={20} />

                <StyledInput
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  errorMessage={touched.password && errors.password}
                  onFocus={this.handleOnFocus}

                />

                {/* <Divider size={15}/> */}

                <StyledView row justify="flex-end">
                  <Title
                    color="primary"
                    accessibilityRole="button"
                    onPress={() => console.log('forgot password')}>
                    Forgot password
                  </Title>
                </StyledView>

                {/* <Divider size={15}/> */}

                <StyledButton
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  title="Login"
                  onPress={handleSubmit}
                />
                <Divider />

                <Title align="center">
                  Or create an account using social media
                </Title>
                <Divider />
                <SocialIcon
                  title="Sign In With Facebook"
                  button
                  type="facebook"
                  style={{
                    height: 45,
                    width: '100%',
                    borderRadius: 20,
                  }}
                  onPress={() => {
                    console.log('facebook');
                  }}
                />
                {/* <Divider size={20} /> */}

                <StyledView row>
                  <Title>Don't have an account ? </Title>
                  <Title
                    color="primary"
                    accessibilityRole="button"
                    onPress={() => this.props.navigation.navigate('Register')}>
                    Sign up
                  </Title>
                </StyledView>
              </StyledView>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '',
    width: "100%",
    height: "100%",
    // backgroundColor: '#ECF6FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
