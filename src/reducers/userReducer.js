import * as constants from '../constants/constants';
const initialState = {user: {jwt: ""}, isLoggingIn: false}


export default function userReducer(state = initialState, action){  
  switch (action.type) {
    case constants.MATCH_LOCAL_STORAGE_TO_STATE:
      return {...state, user: {jwt: localStorage.token}}
    case constants.FETCH_CURRENT_USER_SUCCESS:
      return {...state, user: {...state.user ,...action.user}}
    case constants.LOGIN_START:
    	return {...state, isLoggingIn: true}
    case constants.LOGIN_FAILURE:
    	return {...state, isLoggingIn: false}
    case constants.LOGIN_SUCCESS:
    	return {...state, user: action.user, isLoggingIn: false}
    case constants.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
