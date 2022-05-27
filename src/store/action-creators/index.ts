import * as AuthActionCreators from './auth'
import * as UserActionCreators from './user'
import * as DeviceActionCreators from './devices'
import * as SessionActionCreators from './session'
import * as PortActionCreators from './port'
import * as AnalyzeActionCreators from './analyze'

const exportedObject = {
        ...AuthActionCreators,
        ...UserActionCreators,
        ...DeviceActionCreators,
        ...SessionActionCreators,
        ...PortActionCreators,
        ...AnalyzeActionCreators,
};

export default exportedObject;
