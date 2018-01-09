const initialState = {notes: [], currentNoteId: null}

export default function notesReducer(state = initialState, action){  
  switch (action.type) {
    case "FETCH_NOTES_SUCCESS":
      return Object.assign({}, state, {notes: action.notes});
    case "DEFINE_CURRENT_NOTE":
      return Object.assign({}, state, {currentNoteId: action.currentNoteId})
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}

