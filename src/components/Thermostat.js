import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import CardHeader from './CardHeader';

const Thermostat = (props) => {
    return ( 
        <View style={styles.thermostat}>
            <CardHeader title="Thermostat"/>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Icon
                    type="ionicon"
                    name="md-thermometer"
                    size={35}
                />
                <Text style={{
                    fontSize: 18,
                    marginRight: 15 
                }}>23°C</Text>
            </View>
        </View>
     );
}
 
export default Thermostat;

const styles = StyleSheet.create({
    thermostat: {
        paddingHorizontal: 20,
        marginBottom: 20,
        paddingVertical: 15,
        borderRadius: 10,
        elevation:5,
        // shadowOffset: {width: 10, height: 10},
        shadowOpacity:0,
        // shadowColor: 'green',
        backgroundColor: '#fff'
    }
})