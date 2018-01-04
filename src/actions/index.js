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

export const login = (user_data) => {
	return function action(dispatch) {
		dispatch({type: "LOGIN_START"})

		const request = axios.post('http://localhost:3000/api/user_token', {"auth": {
	    email: user_data.username,
	    password: user_data.password,
	  }});


		return request.then(
			response => {
				dispatch({type: "LOGIN_SUCCESS", user: response.data})
				// dispatch({type: "FETCH_CURRENT_USER"})
				console.log(response)
			},
			err => {
				dispatch({type: "LOGIN_FAILURE"})
			},
		)


	}
}

export const logout = () =>  {
    return {
        type: "LOGOUT",
    }
}
