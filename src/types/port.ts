export interface PortState {
    ports: FetchPortsResponse;
    devices: IPortDevice[]
    loading: boolean;
    error: null | string;
}

export interface IPortDevice {
    device_id: string,
    device_name: string
}

export interface FetchPortsResponse {
    count: number,
    data: IPort[],
}

export enum PortActionTypes {
    FETCH_PORTS = 'FETCH_PORTS',
    FETCH_PORTS_SUCCESS  = 'FETCH_PORTS_SUCCESS',
    FETCH_PORTS_ERROR = 'FETCH_PORTS_ERROR',
    FETCH_PORT_DEVICES = 'FETCH_PORT_DEVICES',
    FETCH_PORT_DEVICES_SUCCESS = 'FETCH_PORT_DEVICES_SUCCESS',
    FETCH_PORT_DEVICES_ERROR = 'FETCH_PORT_DEVICES_ERROR',
}

interface FetchPortsAction {
    type: PortActionTypes.FETCH_PORTS
}

interface FetchPortsSuccessAction {
    type: PortActionTypes.FETCH_PORTS_SUCCESS
    payload: FetchPortsResponse
}

interface FetchPortsErrorAction {
    type: PortActionTypes.FETCH_PORTS_ERROR
    payload: string
}
interface FetchPortDevicesAction {
    type: PortActionTypes.FETCH_PORT_DEVICES
}

interface FetchPortDevicesSuccessAction {
    type: PortActionTypes.FETCH_PORT_DEVICES_SUCCESS
    payload: IPortDevice[]
}

interface FetchPortDevicesErrorAction {
    type: PortActionTypes.FETCH_PORT_DEVICES_ERROR
    payload: string
}


export type PortAction = FetchPortsAction | FetchPortsSuccessAction | FetchPortsErrorAction |
    FetchPortDevicesAction | FetchPortDevicesSuccessAction | FetchPortDevicesErrorAction ;


export interface IPort {
    device_ip: string,
    device_name: string,
    error: number,
    length: string,
    name: string,
    pon_mac: string,
    port: number,
    signal: string,
    status: string,
    tree: number,
    create_dt: string,
    update_dt: string,
    usr_mac: string[]
}
