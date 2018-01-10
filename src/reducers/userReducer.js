const initialState = {user: {jwt: ""}, isLoggingIn: false}


export default function userReducer(state = initialState, action){  
  switch (action.type) {
    case "MATCH_LOCAL_STORAGE_TO_STATE":
      return {...state, user: {jwt: localStorage.token})
    case "FETCH_CURRENT_USER_SUCCESS":
      return {...state, user: {...state.user ,...action.user})
    case "LOGIN_START":
    	return {...state, isLoggingIn: true}
    case "LOGIN_FAILURE":
    	return {...state, isLoggingIn: false}
    case "LOGIN_SUCCESS":
    	return {...state, user: action.user, isLoggingIn: false)
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}

