import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { compositeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './Reducer/RootReducer'
import { fetchUsers } from './Reducer/User/Action'
// const redux = required('redux')
// const createStore = redux.createStore
const middleware = [thunk]
// const thunkMiddleware = require('redux-thunk').default
// const axios = require('axios')

const Store = createStore(RootReducer, applyMiddleware(...middleware))

//store.subscribe(()=>{ console.log(store.getState())})
//store.dispatch(fetchUsers)
export default Store