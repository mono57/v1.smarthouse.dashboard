import { View, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import * as COLORS from '_styles/colors';

const AppStatusBar = ({ backgroundColor, ...props }) => {
    return ( 
        <View style={[styles.statusBar, backgroundColor]}>
            <StatusBar backgroundColor={backgroundColor} {...props} />
        </View>
     );
}
 
export default AppStatusBar;

const BAR_HEIGHT = StatusBar.currentHeight;

AppStatusBar.defaultProps = {
    backgroundColor: COLORS.PRIMARY,
    barStyle: "light-content"
}

const styles = StyleSheet.create({
    statusBar: {
        height: BAR_HEIGHT
    }
})