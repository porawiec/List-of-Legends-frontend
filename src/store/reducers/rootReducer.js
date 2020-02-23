import authReducer from './authReducer'
import wishReducer from './wishReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducer,
    wish: wishReducer
})

export default rootReducer