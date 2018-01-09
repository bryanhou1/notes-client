import axios from 'axios';

const SUCCESS = "success";
const ERROR = "error";

//helper
const authHeader = (token) => {
  return { 'Authorization': 'Bearer ' + token};
}

//actions
export const fetchUser = () => {
  return (dispatch, getState) => {
    const token = getState().current_user.user.jwt
    const request = axios({
      method: 'get',
      url: 'http://localhost:3000/api/current_user',
      headers: authHeader(token),
    })

    return request.then(
      response => {
        dispatch({type: "FETCH_CURRENT_USER_SUCCESS", user: response.data})
      },
      err => {
        // debugger;
        // dispatch({type: "FETCH_FAILURE"})
      }
    )
  }
} 

export const login = user_data => {
	return dispatch => {
		dispatch({type: "LOGIN_START"})

		const request = axios.post('http://localhost:3000/api/user_token', {"auth": {
	    email: user_data.email,
	    password: user_data.password,
	  }});


		return request.then(
			response => {
				localStorage.setItem('token', response.data.jwt)
				dispatch({type: "LOGIN_SUCCESS", user: response.data})
				dispatch({type: "ALERT", messages: {style: SUCCESS, text: ["successfully logged in"]}})
				return response.status;
			},
			err => {
				dispatch({type: "LOGIN_FAILURE"})
        const message = err.response ? "email or password incorrect" : "network error, please try again later";
				dispatch({type: "ALERT", messages: {style: ERROR, text: [message]}})
			},
		)
	}
}

export const register = user_data => {
	return dispatch => {
		dispatch({type: "REGISTER_START"})
		const request = axios.post('http://localhost:3000/api/signup', {
	    email: user_data.email,
	    password: user_data.password,
      name: user_data.name,
      username: user_data.username,
	  });


		return request.then(
			response => {
				// dispatch({type: "REGISTER_SUCCESS"})
				dispatch({type: "ALERT", messages: {style: SUCCESS, text: ["successfully registered"]}});

				return response.status;
			},
			err => {
				// dispatch({type: "REGISTER_FAILURE"})
				dispatch({type: "ALERT", messages: {style: ERROR, text: err.response.data.errors}})
        return err;

			},
		)


	}
}


export const logout = () =>  {
    return dispatch => {
    	dispatch({
        type: "LOGOUT",
    	})
      localStorage.removeItem("token");
    	dispatch({type: "ALERT", messages: {style: SUCCESS, text: ["successfully logged out"]}})
    }
}

export const removeMessage = () => {
  return dispatch => {
    dispatch({
      type: "CLEAR_ALERT"
    })
  }
}

export const fetchNotes = () => {
  
  return (dispatch, getState) => {
    const token = getState().current_user.user.jwt
    const request = axios({
      method: 'get',
      url: 'http://localhost:3000/api/notes',
      headers: authHeader(token),
    })

    return request.then(
      response => {
        dispatch({type: "FETCH_NOTES_SUCCESS", notes: response.data})
      },
      err => {
        // debugger;
        // dispatch({type: "FETCH_FAILURE"})
      }
    )
  }
}

export const switchCurrentNote = currentNoteId => {
  return dispatch => {
    dispatch({type: "DEFINE_CURRENT_NOTE", currentNoteId})
  }
}

export const updateNote = (currentNote, attr, value) => {
    return dispatch => {
    dispatch({type: "UPDATE_NOTE", currentNote, attr, value})
  }
}


export const matchLocalStorageToState = () => {
  return dispatch => {
    dispatch({ type: "MATCH_LOCAL_STORAGE_TO_STATE"});
  }
}

export function initiateSession() {
  return (dispatch, getState) => {
    debugger
    if (getState().current_user.user.jwt !== "") {
      return dispatch(fetchUser()).then(() => {
        return dispatch(fetchNotes())
      })
    }
  }
}
