import { combineReducers } from 'redux';
import userReducer from './userReducer';
export default combineReducers({
	current_user: userReducer
});