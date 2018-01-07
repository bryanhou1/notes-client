const initialState = {messages: []}


export default function userReducer(state = initialState, action){      
  switch (action.type) {
    case "ALERT":
    	return Object.assign({}, state, {messages: action.messages})
    case "CLEAR_ALERT":
    	return Object.assign({}, state, {messages: []})
    default:
      return state;
  }
}
