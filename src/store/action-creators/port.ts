import axios from "./../../utils/axios";
import {Dispatch} from "redux";
import {FetchPortsResponse, PortAction, PortActionTypes, IPortDevice} from "../../types/port";

export const fetchPorts =  ({device_id = '', mac_address = ''}) => {
    return async (dispatch: Dispatch<PortAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: PortActionTypes.FETCH_PORTS})
            const response = await axios.post<FetchPortsResponse>('api/statistic/port_stat', {
                    device_id,
                    mac_address
                },
                {
                    headers: {
                        'X-auth-key': state.auth.token,
                        'X-auth-login': state.auth.login,
                    }
                })
            dispatch({type: PortActionTypes.FETCH_PORTS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: PortActionTypes.FETCH_PORTS_ERROR,
                payload: 'Ошибка при загрузке списка'
            })
        }
    }
}



export const fetchPortDevices =  () => {
    return async (dispatch: Dispatch<PortAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: PortActionTypes.FETCH_PORT_DEVICES})
            const response = await axios.get<{data: IPortDevice[], status: boolean}>('api/statistic/get_devices',
                {
                    headers: {
                        'X-auth-key': state.auth.token,
                        'X-auth-login': state.auth.login,
                    }
                })
            dispatch({type: PortActionTypes.FETCH_PORT_DEVICES_SUCCESS, payload: response.data.data})
        } catch (error) {
            dispatch({
                type: PortActionTypes.FETCH_PORT_DEVICES_ERROR,
                payload: 'Ошибка при загрузке списка'
            })
        }
    }
}

