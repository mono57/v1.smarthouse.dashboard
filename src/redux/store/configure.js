import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import showAppReducer from "../reducers/show-app-reducer";
import getMqttMessage from '../reducers/mqtt-message-reducer';
import getDevices from '../reducers/devices-reducer';
import mqttConnected from '../reducers/mqtt-connected-reducer';


const RootReducer = combineReducers({
  showApp: showAppReducer,
  message: getMqttMessage,
  devices: getDevices,
  mqttConnected: mqttConnected
});


const configureStore = () => createStore(RootReducer, applyMiddleware(thunk));


export default configureStore;