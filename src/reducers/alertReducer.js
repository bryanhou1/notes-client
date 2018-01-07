const initialState = {messages: []}


export default function userReducer(state = initialState, action){      
  switch (action.type) {
    case "ALERT":
    	return Object.assign({}, state, {messages: action.messages})
    default:
      return state;
  }
}
