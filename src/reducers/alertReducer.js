const initialState = {messages: []}

export default function userReducer(state = initialState, action){      
  switch (action.type) {
    case "ALERT":
    	return {...state, messages: action.messages}
    case "CLEAR_ALERT":
    	return initialState
    default:
      return state;
  }
}