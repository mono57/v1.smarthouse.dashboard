import React, {Component} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import {Text, Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import base from '_styles/base';
import CardHeader from '_components/CardHeader';

class Ligth extends Component {
  state = {
    isOn: false,
  };

  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;

    const {mqttClient, topic} = this.props;

    mqttClient && this._isMounted
      ? this.setState({mqttClient: mqttClient, topic: topic})
      : null;

    // Publish message on topic for try to get last state of device
    // Update state with last state obtained

    mqttClient.subscribe(topic, 0);
  }

  formatStyleState = () => {
    return this.state.isOn ? {color: 'green'} : null;
  };

  handleValueChange = value => {
    const {mqttClient, topic} = this.state;
    mqttClient.publish(topic, value.toString(), 2, false);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {message} = nextProps;
    const {topic} = this.state;

    if (message.topic !== topic) return;

    this._isMounted && this.setState({isOn: message.data === 'true'});
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const text = this.state.isOn ? 'ON' : 'OFF';

    const {name, mqttConnected} = this.props;
    console.log('From light: ', mqttConnected);
    return (
      <View style={styles.lightContainer}>
        <CardHeader title={name} />

        <View style={styles.light}>
          <Icon name="highlight" color="black" size={35} />
          <View
            style={
              ([base.dFlex, base.flewRow],
              {
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 'auto',
                alignItems: 'center',
              })
            }>
            <Text h4 style={this.formatStyleState()}>
              {text}
            </Text>
            <Switch
              value={this.state.isOn}
              onValueChange={this.handleValueChange}
            />
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.message,
    ...state.mqttConnected
  };
}

export default connect(mapStateToProps, null)(Ligth);

const styles = StyleSheet.create({
  lightContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 15,
    borderRadius: 10,
    // elevation: 5,
    // shadowOffset: {width: 10, height: 10},
    // shadowOpacity: 0,
    // shadowColor: 'green',
    backgroundColor: '#fff',
  },
  light: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
