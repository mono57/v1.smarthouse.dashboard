import { createStackNavigator }  from 'react-navigation-stack';
import * as COLORS from '_styles/colors';
import AddDeviceForm from '_screens/devices/add';
import ScanDevice from '_screens/devices/scan';
import Home from '_screens/home';


export default MainNavigator = createStackNavigator(
  {
    Home: Home,
    AddDevice: AddDeviceForm,
    ScanDevice: ScanDevice
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: COLORS.PRIMARY,
        elevation: 0
      },
      headerTintColor: COLORS.WHITE,
      headerTitleStyle: {
        fontWeight: "normal",
        fontFamily: "RobotoLight"
      }
    }
  }
  // { headerMode: "none" }
);
