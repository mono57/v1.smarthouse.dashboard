import React, {Component} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-community/async-storage';
import {Formik} from 'formik';
import Divider from '_common/Divider';
import {StyledInput, StyledButton, StyledView, Title, Title1} from '_styled';
import { View } from '../../components/styled';

const authService = require('_services/auth.service');

const Yup = require('yup');

export default class Register extends Component {
  UserCreationSchema = Yup.object().shape({
    phone_or_email: Yup.string()
      .required()
      .label('Email or Telephone'),
    password: Yup.string()
      .min(8)
      .required()
      .label('Password'),
    passwordConfirm: Yup.string()
      .min(8)
      .required()
      .label('Password confirmation')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  handleSubmit = async (values, actions) => {
    const data = await authService.register(values);
    await AsyncStorage.setItem('@userKey', data.key);
    console.log(data.key);

    this.props.navigation.navigate('RegisterCode');
  };

  // renderInput = type => {
  //   return <StyledInput {...props} />
  // }

  render() {
    
    // const { form } = this.props;
    // form.schema,
    // form.fields.map(field => ({
    //   this.renderInput(field.type)(field.props)
    // }))
    return (
      <KeyboardAwareScrollView style={{flex:1}}
      // behavior="padding"
      // style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      >
        <View style={{flex:1, alignItems: "center", justifyContent: "center", }}>
        <Formik
          initialValues={{
            phone_or_email: '',
            password: '',
            passwordConfirm: '',
          }}
          onSubmit={this.handleSubmit}
          validationSchema={this.UserCreationSchema}>
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldTouched,
            errors,
            touched,
            isValid,
            isSubmitting,
          }) => (
            //

            <StyledView width="100%">
              <Title1 bold>Register</Title1>
              <Title style={{marginTop: 10}}>
                Fill fields to create your account
              </Title>
              <Divider />
              <StyledInput
                placeholder="Email or Phone number"
                autoCapitalize="none"
                value={values.email}
                onChangeText={handleChange('phone_or_email')}
                onBlur={handleBlur('phone_or_email')}
                errorMessage={touched.phone_or_email && errors.phone_or_email}
              />

              <Divider />

              <StyledInput
                autoCapitalize="none"
                value={values.password}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                errorMessage={touched.password && errors.password}
              />

              <Divider />

              <StyledInput
                autoCapitalize="none"
                value={values.passwordConfirm}
                secureTextEntry={true}
                placeholder="Password Confirmation"
                onChangeText={handleChange('passwordConfirm')}
                onBlur={handleBlur('passwordConfirm')}
                errorMessage={touched.passwordConfirm && errors.passwordConfirm}
              />

              <Divider />

              <StyledButton
                loading={isSubmitting}
                disabled={isSubmitting}
                title="Register"
                onPress={handleSubmit}
              />
              <Divider />

              <StyledView row>
                <Title>Already have an account ? </Title>
                <Title
                  color="primary"
                  accessibilityRole="button"
                  onPress={() => this.props.navigation.navigate('Login')}>
                  Login
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
