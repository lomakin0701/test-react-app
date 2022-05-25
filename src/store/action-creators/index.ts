import * as AuthActionCreators from './auth'
import * as UserActionCreators from './user'
import * as DeviceActionCreators from './devices'

const exportedObject = {
        ...AuthActionCreators,
        ...UserActionCreators,
        ...DeviceActionCreators,
};

export default exportedObject;
