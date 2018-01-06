// import fetch from 'isomorphic-fetch';

// export const login = (user_data) => {
// 	return (dispatch) => {
// 		dispatch({type: 'AUTHENTICATE_USER_START'})
// 		return fetch('localhost:3000/api/user_token')
// 			.then(res => {return res.json()})
// 			.then(responseJson => {
// 				debugger;
// 			})
// 	}
// }
import axios from 'axios';

const SUCCESS = "success";
const ERROR = "error";


export const login = (user_data) => {
	return function action(dispatch) {
		dispatch({type: "LOGIN_START"})

		const request = axios.post('http://localhost:3000/api/user_token', {"auth": {
	    email: user_data.email,
	    password: user_data.password,
	  }});


		return request.then(
			response => {
				localStorage.setItem('token', response.data.jwt)
				dispatch({type: "LOGIN_SUCCESS", user: response.data})
				dispatch({type: "ALERT_SUCCESS", messages: {style: SUCCESS, text: "successfully logged in"}})
				// dispatch({type: "FETCH_CURRENT_USER"})
			},
			err => {
				dispatch({type: "LOGIN_FAILURE"})
				dispatch({type: "ALERT_SUCCESS", messages: {style: ERROR, text: "email or password incorrect"}})
			},
		)


	}
}

export const logout = () =>  {
    return (dispatch) => {
    	dispatch({
        type: "LOGOUT",
    	})
    	dispatch({type: "ALERT_SUCCESS", messages: {style: SUCCESS, text: "successfully logged out"}})

    }
}
