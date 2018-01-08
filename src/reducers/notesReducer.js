const initialState = []

export default function notesReducer(state = initialState, action){  
  switch (action.type) {
    case "FETCH_NOTES_SUCCESS":
      console.log(action.notes)
      return action.notes;
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
}

