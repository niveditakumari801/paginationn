import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./ActionType"

const initialState = {
    loading:false,
    users: [],
    error : ''
}


export default function reducer  (state = initialState, action) {

    switch (action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading :true
            }

            case FETCH_USERS_SUCCESS:
                console.log("state", action.payload)
                return {
                    loading: false,
                    users: action.payload,
                    error: ''
                }
            case FETCH_USERS_FAILURE:
                return {
                    loading: false,
                    users: [],
                    error: action.payload
                }
            

                default: return state


    }
}


