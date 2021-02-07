import { DEVICE_LIST } from '../constants';

const initialState = {
    devices: null
}

export default function getDevices(state=initialState, action) {
    if(action.type === DEVICE_LIST) {
        return {
            ...state,
            devices: action.payload
        }
    }
    return state

}