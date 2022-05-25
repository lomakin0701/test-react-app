export interface DeviceState {
    devices: IDevice[];
    device?: IDevice | null;
    loading: boolean;
    error: null | string;
}

export enum DeviceActionTypes {
    FETCH_DEVICES = 'FETCH_DEVICES',
    FETCH_DEVICES_SUCCESS  = 'FETCH_DEVICES_SUCCESS',
    FETCH_DEVICES_ERROR = 'FETCH_DEVICES_ERROR',
    FETCH_DEVICE = 'FETCH_DEVICE',
    FETCH_DEVICE_SUCCESS  = 'FETCH_DEVICE_SUCCESS',
    FETCH_DEVICE_ERROR = 'FETCH_DEVICE_ERROR',
    CREATE_DEVICE = 'CREATE_DEVICE',
    CREATE_DEVICE_SUCCESS  = 'CREATE_DEVICE_SUCCESS',
    CREATE_DEVICE_ERROR = 'CREATE_DEVICE_ERROR',
    UPDATE_DEVICE = 'UPDATE_DEVICE',
    UPDATE_DEVICE_SUCCESS  = 'UPDATE_DEVICE_SUCCESS',
    UPDATE_DEVICE_ERROR = 'UPDATE_DEVICE_ERROR',
    DELETE_DEVICE = 'DELETE_DEVICE',
    DELETE_DEVICE_SUCCESS  = 'DELETE_DEVICE_SUCCESS',
    DELETE_DEVICE_ERROR = 'DELETE_DEVICE_ERROR',
}

interface FetchDevicesAction {
    type: DeviceActionTypes.FETCH_DEVICES
}

interface FetchDevicesSuccessAction {
    type: DeviceActionTypes.FETCH_DEVICES_SUCCESS
    payload: IDevice []
}

interface FetchDevicesErrorAction {
    type: DeviceActionTypes.FETCH_DEVICES_ERROR
    payload: string
}

interface FetchDeviceAction {
    type: DeviceActionTypes.FETCH_DEVICE
}

interface FetchDeviceSuccessAction {
    type: DeviceActionTypes.FETCH_DEVICE_SUCCESS
    payload: IDevice
}

interface FetchDeviceErrorAction {
    type: DeviceActionTypes.FETCH_DEVICE_ERROR
    payload: string
}

interface CreateDeviceAction {
    type: DeviceActionTypes.CREATE_DEVICE
}

interface CreateDeviceSuccessAction {
    type: DeviceActionTypes.CREATE_DEVICE_SUCCESS
}

interface CreateDeviceErrorAction {
    type: DeviceActionTypes.CREATE_DEVICE_ERROR
    payload: string
}

interface UpdateDeviceAction {
    type: DeviceActionTypes.UPDATE_DEVICE
}

interface UpdateDeviceSuccessAction {
    type: DeviceActionTypes.UPDATE_DEVICE_SUCCESS
    payload: IDevice
}

interface UpdateDeviceErrorAction {
    type: DeviceActionTypes.UPDATE_DEVICE_ERROR
    payload: string
}

interface DeleteDeviceAction {
    type: DeviceActionTypes.DELETE_DEVICE
}

interface DeleteDeviceSuccessAction {
    type: DeviceActionTypes.DELETE_DEVICE_SUCCESS
}

interface DeleteDeviceErrorAction {
    type: DeviceActionTypes.DELETE_DEVICE_ERROR
    payload: string
}

export type DeviceAction =
    FetchDevicesAction | FetchDevicesSuccessAction | FetchDevicesErrorAction    |
    FetchDeviceAction | FetchDeviceSuccessAction | FetchDeviceErrorAction       |
    CreateDeviceAction | CreateDeviceSuccessAction | CreateDeviceErrorAction    |
    UpdateDeviceAction | UpdateDeviceSuccessAction | UpdateDeviceErrorAction    |
    DeleteDeviceAction | DeleteDeviceSuccessAction | DeleteDeviceErrorAction ;


export interface IDevice {
    device_ip: string,
    device_id: string
    device_name: string
    count: number
}
