import axios from "axios";
import {Dispatch} from "redux";
import {IDevice,FetchDevicesResponse,  DeviceAction, DeviceActionTypes} from "../../types/device";

export const fetchDevices = (page = 1, limit =  10) => {
    return async (dispatch: Dispatch<DeviceAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: DeviceActionTypes.FETCH_DEVICES})
            const response = await axios.get<FetchDevicesResponse>('api/devices', {
                headers: {
                    'X-auth-key': state.auth.token,
                    'X-auth-login': state.auth.login,
                }
            })
            dispatch({type: DeviceActionTypes.FETCH_DEVICES_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: DeviceActionTypes.FETCH_DEVICES_ERROR,
                payload: 'Ошибка при загрузке списка девайсов'
            })
        }
    }
}


export const fetchDevice = (uid: string) => {
    return async (dispatch: Dispatch<DeviceAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: DeviceActionTypes.FETCH_DEVICE})
            const response = await axios.get<IDevice>(`api/users/${uid}`, {
                headers: {
                    'X-auth-key': state.auth.token,
                    'X-auth-login': state.auth.login,
                }
            });
            dispatch({type: DeviceActionTypes.FETCH_DEVICE_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: DeviceActionTypes.FETCH_DEVICE_ERROR,
                payload: 'Ошибка при загрузке девайса'
            })
        }
    }
}


export const createDevice = (data: object) => {
    return async (dispatch: Dispatch<DeviceAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: DeviceActionTypes.CREATE_DEVICE})
            const response = await axios.post(`api/users`, data, {
                headers: {
                    'X-auth-key': state.auth.token,
                    'X-auth-login': state.auth.login,
                }
            });
            dispatch({type: DeviceActionTypes.CREATE_DEVICE_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: DeviceActionTypes.CREATE_DEVICE_ERROR,
                payload: 'Ошибка при создании девайса'
            })
        }
    }
}


export const updateDevice = (uid: string, data: object) => {
    return async (dispatch: Dispatch<DeviceAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: DeviceActionTypes.UPDATE_DEVICE})
            const response = await axios.put(`api/users/${uid}`, data, {
                headers: {
                    'X-auth-key': state.auth.token,
                    'X-auth-login': state.auth.login,
                }
            });
            dispatch({type: DeviceActionTypes.UPDATE_DEVICE_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: DeviceActionTypes.UPDATE_DEVICE_ERROR,
                payload: 'Ошибка при обновлении девайса'
            })
        }
    }
}

export const deleteDevice = (uid: string) => {
    return async (dispatch: Dispatch<DeviceAction>, getState: () => any) => {
        const state = await getState();
        try  {
            dispatch({type: DeviceActionTypes.DELETE_DEVICE})
            const response = await axios.delete(`api/users/${uid}`, {
                headers: {
                    'X-auth-key': state.auth.token,
                    'X-auth-login': state.auth.login,
                }
            });
            dispatch({type: DeviceActionTypes.DELETE_DEVICE_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({
                type: DeviceActionTypes.DELETE_DEVICE_ERROR,
                payload: 'Ошибка при удалении девайса'
            })
        }
    }
}
