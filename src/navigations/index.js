import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthNavigator from "./auth-navigator";
import MainNavigator from "./main-navigator";
import AuthLoadingScreen from "_screens/auth-loading";

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Main: MainNavigator,
      Auth: AuthNavigator
    },
    { initialRouteName: "AuthLoading" }
  )
);

export default AppContainer;
