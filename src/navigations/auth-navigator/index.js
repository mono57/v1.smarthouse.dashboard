import { createStackNavigator } from "react-navigation-stack";
import Login from "_screens/auth/login";
import Register from "_screens/auth/register";
import RegisterCode from "_screens/auth/registerCode";


const AuthNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    RegisterCode: RegisterCode
  },
  { headerMode: "none" }
);

export default AuthNavigator;
