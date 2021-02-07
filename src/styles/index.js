import * as Colors from './colors';
import * as Typography from './typography';
import * as Spacing from './spacing';
import { bg } from './mixins';
 

import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    container: {

    },
    bgPrimary: {
        ...bg(Colors.PRIMARY)
    },
    bgSecondary: {
        ...bg(Colors.SECONDARY)
    }
})