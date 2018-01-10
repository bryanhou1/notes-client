import axios from 'axios';
import * as constants from '../constants/constants';

//helper
const authHeader = (token) => {
  return { 'Authorization': 'Bearer ' + token};
}

//actions
export const fetchUser = () => {
  return (dispatch, getState) => {
    const token = getState().currentUser.user.jwt
    const request = axios({
      method: 'get',
      url: `${constants.DOMAIN}/api/current_user`,
      headers: authHeader(token),
    })

    return request.then(
      response => {
        dispatch({type: constants.FETCH_CURRENT_USER_SUCCESS, user: response.data})
      },
      err => {
        throw err;
      }
    )
  }
} 

export const login = user_data => {
	return dispatch => {
		dispatch({type: constants.LOGIN_START})

		const request = axios.post(`${constants.DOMAIN}/api/user_token`, {"auth": {
	    email: user_data.email,
	    password: user_data.password,
	  }});


		return request.then(
			response => {
				localStorage.setItem('token', response.data.jwt)
				dispatch({type: constants.LOGIN_SUCCESS, user: response.data})
				dispatch({type: constants.ALERT, messages: {style: constants.SUCCESS, text: ["successfully logged in"]}})
				return response.status;
			},
			err => {
				dispatch({type: constants.LOGIN_FAILURE})
        const message = err.response ? "email or password incorrect" : "network error, please try again later";
				dispatch({type: constants.ALERT, messages: {style: constants.ERROR, text: [message]}})
        throw err;
			},
		)
	}
}

export const register = user_data => {
	return dispatch => {
		const request = axios.post(`${constants.DOMAIN}/api/signup`, {
	    email: user_data.email,
	    password: user_data.password,
      name: user_data.name,
      username: user_data.username,
	  });


		return request.then(
			response => {
				dispatch({type: constants.ALERT, messages: {style: constants.SUCCESS, text: ["successfully registered"]}});

				return response.status;
			},
			err => {
				dispatch({type: constants.ALERT, messages: {style: constants.ERROR, text: err.response.data.errors}})
        return err;
			},
		)
	}
}

export const logout = () =>  {
    return dispatch => {
    	dispatch({
        type: constants.LOGOUT,
    	})
      localStorage.removeItem("token");
    	dispatch({type: constants.ALERT, messages: {style: constants.SUCCESS, text: ["successfully logged out"]}})
    }
}

export const removeMessage = () => {
  return dispatch => {
    dispatch({
      type: constants.CLEAR_ALERT
    })
  }
}

export const fetchNotes = () => {
  
  return (dispatch, getState) => {
    const token = getState().currentUser.user.jwt
    const request = axios({
      method: 'get',
      url: `${constants.DOMAIN}/api/notes`,
      headers: authHeader(token),
    })
    return request.then(
      response => {
        dispatch({type: constants.FETCH_NOTES_SUCCESS, notes: response.data})
      },
      err => {
        throw err
      }
    )
  }
}

export const switchCurrentNote = currentNoteId => {
  return dispatch => {
    dispatch({type: constants.DEFINE_CURRENT_NOTE, currentNoteId})
  }
}

export const updateNote = (currentNote, attr, value) => {
  return dispatch => {
    dispatch({type: constants.UPDATE_NOTE, currentNote, attr, value})
  }
}

export const submitNote = () => {
  return (dispatch, getState) => {
    const token = getState().currentUser.user.jwt;
    const {notes, currentNoteId} = getState().notesReducer;
    const currentNote = notes[currentNoteId];
    if (!currentNote.modified) {
      return;
    }
    const {title, text, starred} = currentNote;
    const request = axios({
      method: 'patch',
      url: `${constants.DOMAIN}/api/notes/${currentNoteId}`,
      data: {title: title, text: text, starred: starred},
      headers: authHeader(token),
    })

    dispatch({type: constants.SUBMIT_NOTE_START, id: currentNoteId});
    return request.then(
      response => {
        dispatch({type: constants.SUBMIT_NOTE_SUCCESS, id: currentNoteId, last_updated: response.data})
      },
      err => {
        dispatch({type: constants.SUBMIT_NOTE_FAILURE, id: currentNoteId})
        throw err;
      }
    )
  }
}

export const createNewNote = () => {
  return (dispatch, getState) => {
    const token = getState().currentUser.user.jwt;
    const request = axios({
      method: 'post',
      url: `${constants.DOMAIN}/api/notes/`,
      headers: authHeader(token),
    })
    return request.then(
      response => {
        dispatch({type: constants.CREATE_NEW_NOTE_SUCCESS, note: response.data})
      },
      err => {
        throw err;
      }
    )
  }
}



export const matchLocalStorageToState = () => {
  return dispatch => {
    dispatch({ type: constants.MATCH_LOCAL_STORAGE_TO_STATE});
  }
}

export function initiateSession() {
  return (dispatch, getState) => {
    if (getState().currentUser.user.jwt !== "") {
      return dispatch(fetchUser()).then(() => {
        return dispatch(fetchNotes())
      })
    }
  }
}
