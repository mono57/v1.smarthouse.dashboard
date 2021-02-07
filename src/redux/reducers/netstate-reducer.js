import { NET_STATE } from "../constants";


export default function netStateReducer(state={netState: false}, {type, payload}){
    if(type === NET_STATE){
        return {
            ...state,
            netState: payload
        }
    }
    return state
}