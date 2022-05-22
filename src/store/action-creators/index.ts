import * as AuthActionCreators from './auth'
import * as UserActionCreators from './user'

export default {
    ...AuthActionCreators,
    ...UserActionCreators,
}
