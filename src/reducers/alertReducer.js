import * as constants from '../constants/constants';
const initialState = {messages: []}

export default function userReducer(state = initialState, action){      
  switch (action.type) {
    case constants.ALERT:
    	return {...state, messages: action.messages}
    case constants.CLEAR_ALERT:
    	return initialState
    default:
      return state;
  }
}