import { combineReducers } from 'redux'
import reducer from './User/Reducer'


const RootReducer = combineReducers({
    users: reducer
})

export default RootReducer