import {DeviceState, DeviceAction, DeviceActionTypes} from "../../types/device";

const initialState: DeviceState = {
    devices: [],
    device: null,
    loading: false,
    error: null
}

export const deviceReducer = (state = initialState, action: DeviceAction): DeviceState => {
    switch (action.type){
        case DeviceActionTypes.FETCH_DEVICES:
            return { ...state, loading: true}
        case DeviceActionTypes.FETCH_DEVICES_SUCCESS:
            return { ...state, loading: false, devices: action.payload}
        case DeviceActionTypes.FETCH_DEVICES_ERROR:
        case DeviceActionTypes.FETCH_DEVICE_ERROR:
        case DeviceActionTypes.CREATE_DEVICE_ERROR:
        case DeviceActionTypes.UPDATE_DEVICE_ERROR:
        case DeviceActionTypes.DELETE_DEVICE_ERROR:
            return { ...state, loading: false, error: action.payload}
        default:
            return state;
    }
}
