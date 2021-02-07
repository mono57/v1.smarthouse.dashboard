import { MQTT_CONNECTED } from "../constants";

export default function mqttConnected(state={mqttConnected: false}, {type, payload}) {
    if(type  === MQTT_CONNECTED) {
        return {
            ...state,
            mqttConnected: payload
        }
    }
    return state
}