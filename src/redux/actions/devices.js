import { getDevices } from '_services/device.service';
import { DEVICE_LIST, GET_MQTT_MESSAGE } from '_redux/constants';


export const getDeviceList = token => async dispatch => {
  const data = await getDevices(token);

  dispatch({
    type: DEVICE_LIST,
    payload: data,
  });
};

export const publishMessage = message => dispatch => {
  dispatch({
    type: GET_MQTT_MESSAGE,
    payload: message,
  });
};
