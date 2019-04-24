import Types from '../Actions/Types'
import { combineReducers } from 'redux'
import multiply from './reducerOne'
import add from './reducerTwo'

export default combineReducers({ multiply, add })
