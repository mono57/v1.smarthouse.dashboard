import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'react-native-elements';
import MQTT from 'sp-react-native-mqtt';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import Light from '_components/Light';
import Thermostat from '_components/Thermostat';
import AppStatusBar from '_components/app-status-bar';
import NoInternet from '_components/no-internet';
import base from '_styles/base';
import EmptyDevice from '_screens/devices/empty';
import * as COLORS from '_styles/colors';
import {getDeviceList, publishMessage} from '_redux/actions/devices';
import {MQTT_CONNECTED} from '_redux/constants';

import AppIndicator from './loading';

const deviceObj = {
  Kontak: (client, name, serial, key) => {
    return <Light mqttClient={client} name={name} topic={serial} key={key} />;
  },
  Thermostat: () => {
    return (
      <Thermostat mqttClient={client} name={name} topic={serial} key={key} />
    );
  },
};

function renderDevice(type, client, name, serial, key) {
  return deviceObj[type](client, name, serial, key);
}

class Home extends Component {
  state = {
    isLoading: true,
    mqttConnected: false,
    isConnected: false,
  };

  _isMounted = false;
  _netState = undefined;

  static navigationOptions = function({navigation}) {
    return {
      title: 'My Home',

      headerRight: function() {
        return (
          <View
            style={[
              base.dFlex,
              base.flexRow,
              base.textCenter,
              {marginRight: 20},
            ]}>
            <Icon
              name="ios-add-circle-outline"
              type="ionicon"
              color="white"
              size={33}
              onPress={() => navigation.navigate('AddDevice')}
            />
            <View style={{paddingHorizontal: 10}} />
            <Icon
              name="qrcode-scan"
              type="material-community"
              color="white"
              size={25}
              iconStyle={{
                fontFamily: 'RobotoLight',
                marginTop: 3,
              }}
              onPress={() => navigation.navigate('ScanDevice')}
            />
          </View>
        );
      },
      headerLeft: () => (
        <View style={{paddingLeft: 20}}>
          <Icon name="user" type="evilicon" color="white" size={40} />
        </View>
      ),
    };
  };

  async componentDidMount() {
    this._isMounted = true;

    this._netState = NetInfo.addEventListener(state => {
      this.setState({isConnected: state.isConnected});
    });

    const token = await AsyncStorage.getItem('@userToken');

    const {
      getDeviceList,
      publishMessage,
      publishMqttBrokerConnexionState,
    } = this.props;

    if (this._isMounted && this.state.isConnected) {
      getDeviceList(token);

      MQTT.createClient({
        uri: 'mqtt://broker.hivemq.com:1883',
        clientId: 'your_client_id',
      })
        .then(client => {
          client.on('closed', () => {
            console.log('mqtt.event.closed');
          });

          client.on('error', msg => {
            console.log('mqtt.event.error', msg);
            setTimeout(() => {
              client.connect();
              console.log('Reconnection called !');
            }, 3000);
          });

          client.on('message', msg => {
            publishMessage(msg);
          });

          client.on('connect', () => {
            console.log('Client connected');
            publishMqttBrokerConnexionState(true);
            this.setState({client: client});
          });

          client.connect();
        })
        .catch(err => {
          console.log(err);
        });
    }

    // this.setState({devices: data});
  }

  handleLogout = async () => {
    await AsyncStorage.removeItem('@userToken');
    this.props.navigation.navigate('AuthLoading');
  };

  // componentWillUpdate() {
  //   console.log("State will update !")
  // }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {devices, netState} = nextProps;

    if (devices && devices.hasOwnProperty('error')) {
      console.log(data.error);
      return;
    }

    this.setState({isLoading: false});
  }

  componentWillUnmount() {
    this._isMounted = false;
    this._netState();
  }

  render() {
    const {isLoading, client, isConnected} = this.state;
    const {devices, navigation, mqttConnected} = this.props;

    if (isLoading || !mqttConnected)
      return (
        <>
          <AppStatusBar />
          {!isConnected && <NoInternet />}
          {isConnected && <AppIndicator />}
        </>
      );
    if (devices && devices.length) {
      return (
        <>
          <AppStatusBar />
          {!isConnected && <NoInternet />}
          <View style={styles.container}>
            {devices.map(device =>
              renderDevice(
                device.type.name,
                client,
                device.name,
                device.serial_number,
                device._id,
              ),
            )}
          </View>
        </>
      );
    }
    return (
      <>
        <AppStatusBar />
        {!isConnected && <NoInternet />}
        <EmptyDevice
          navigation={navigation}
          // handleAddDevice={this.handleAddDevice}
          // handleScanDevice={this.handleScanDevice}
        />
      </>
    );
  }
}

function mapToProps(state) {
  return {
    ...state.devices,
    ...state.mqttConnected,
  };
}

const publishMqttBrokerConnexionState = state => dispatch => {
  // console.log(dispatch)
  dispatch({
    type: MQTT_CONNECTED,
    payload: state,
  });
};

export default connect(
  mapToProps,
  {
    getDeviceList,
    publishMessage,
    publishMqttBrokerConnexionState,
  },
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
