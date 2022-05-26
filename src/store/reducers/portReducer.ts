import {PortState, PortAction, PortActionTypes} from "../../types/port";

const initialState: PortState = {
    ports: {
        count: 0,
        data: []
    },
    devices: [],
    loading: false,
    error: null
}

export const portReducer = (state = initialState, action: PortAction): PortState => {
    switch (action.type){
        case PortActionTypes.FETCH_PORTS:
            return { ...state, loading: true}
        case PortActionTypes.FETCH_PORTS_SUCCESS:
            return { ...state, loading: false, ports: action.payload}
        case PortActionTypes.FETCH_PORT_DEVICES_SUCCESS:
            return { ...state, loading: false, devices: action.payload}
        case PortActionTypes.FETCH_PORTS_ERROR:
        case PortActionTypes.FETCH_PORT_DEVICES_ERROR:
            return { ...state, loading: false, error: action.payload}
        default:
            return state;
    }
}
