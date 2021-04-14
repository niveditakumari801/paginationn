import axios from 'axios'


/*const initialState = {
    loading: false,
    users:[],
    error: ''

    const FETCH_USERS_FAILURE ='ETCH_USERS_FAILURE'
    const FETCH_USERS_FAILURE ='ETCH_USERS_REQUEST'
    const FETCH_USERS_FAILURE ='ETCH_USERS_SUCCESS'
}*/
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./ActionType"

export const fetchUserRequest= () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}


export const fetchUserSuccess= (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUserFailure= (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = (i) => dispatch =>{
    // debugger
    
    /* */
return ( axios.get(`https://api.instantwebtools.net/v1/passenger?page=${i}&size=20`)
    .then(response=>{
        
        // debugger;
        const users = response.data //.map(user => user.id)
        dispatch(fetchUserSuccess(users))
    })
    .catch (error => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg))
    }))   
    // dispatch (fetchUserRequest()) 
}