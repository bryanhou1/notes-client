const initialState = {notes: []}

export default function notesReducer(state = initialState, action){  
  switch (action.type) {
    case "FETCH_NOTES_SUCCESS":
      return Object.assign({}, state, {notes: action.notes})
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}

