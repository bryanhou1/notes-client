const initialState = {messages: []}


export default function userReducer(state = initialState, action){      
  switch (action.type) {
    case "ALERT_SUCCESS":
    	return Object.assign({}, state, {messages: [action.messages]})
    case "ALERT_ERROR":
    	return Object.assign({}, state, {messages: [action.messages]})
    default:
      return state;
  }
}
