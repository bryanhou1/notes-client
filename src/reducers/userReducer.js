const initialState = {user: {}, isLoggingIn: false}


export default function userReducer(state = initialState, action){      
  switch (action.type) {
    case "LOGIN_START":
    	return Object.assign({}, state, {isLoggingIn: true})
    case "LOGIN_FAILURE":
    	return Object.assign({}, state, {isLoggingIn: false})
    case "LOGIN_SUCCESS":
    	return Object.assign({}, state, {user: action.user}, {isLoggingIn: false})
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}

