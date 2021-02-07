import React, {Component} from 'react';
import AppIntro from './src/screens/app-intro';
import AppContainer from './src/navigations';
import {Provider, connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen'; 
import configureStore from '_redux/store/configure';

const store = configureStore();

class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const {showApp} = this.props;

    return !showApp ? <AppIntro /> : <AppContainer />;
  }
}

function mapStateToProps(state) {
  return state.showApp;
}

const ConnectedApp = connect(mapStateToProps, null)(App);

const RNRedux = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export default RNRedux;
