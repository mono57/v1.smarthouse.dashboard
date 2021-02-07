import { GET_MQTT_MESSAGE } from '../constants';


const initialState = {
    message: {}
}

export default getMqttMessage = (state = initialState, action) => {
    if(action.type == GET_MQTT_MESSAGE){
        return {
            ...state,
            message: action.payload
        }
    }
    return state
}