const initialState = {user: {}, isLoggingIn: false, errors: {}}


export default function userReducer(state = initialState, action){      
  switch (action.type) {
    case "LOGIN_START":
    	return Object.assign({}, state, {isLoggingIn: true})
    case "LOGIN_FAILURE":
    	return Object.assign({}, state, {errors: "email or password incorrect." })
    case "LOGIN_SUCCESS":
    	return Object.assign({}, state, action.user)
    default:
      return state;
  }
}