import * as AuthActionCreators from './auth'
import * as UserActionCreators from './user'
import * as DeviceActionCreators from './devices'
import * as SessionActionCreators from './session'
import * as PortActionCreators from './port'

const exportedObject = {
        ...AuthActionCreators,
        ...UserActionCreators,
        ...DeviceActionCreators,
        ...SessionActionCreators,
        ...PortActionCreators,
};

export default exportedObject;
