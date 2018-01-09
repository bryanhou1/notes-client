import { combineReducers } from 'redux';
import userReducer from './userReducer';
import alertReducer from './alertReducer';
import notesReducer from './notesReducer';
export default combineReducers({
	current_user: userReducer,
	alert: alertReducer,
  notesReducer,
});