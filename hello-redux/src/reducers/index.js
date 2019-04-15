import { combineReducers } from 'redux'
import user from './user'
import username from './name'

export default combineReducers({
    user : user,
    username : username
})

