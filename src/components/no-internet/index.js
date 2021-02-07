import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {useHeaderHeight} from 'react-navigation-stack';
import {NET_STATE} from '_redux/constants';
import {connect} from 'react-redux';

const {height: W_HEIGHT} = Dimensions.get('window');

const NoInternet = () => {
  return (
    <>
      <View style={[styles.container]}>
        <Text style={styles.text}>No Internet</Text>
      </View>
    </>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: 'rgba(196, 196, 196, 0.8)',
    position: 'absolute',
    zIndex: 1,
  },
  text: {
    color: '#fff',
    width: '100%',
    backgroundColor: '#ed5858',
    textAlign: 'center',
    paddingVertical: 8,
  },
});
