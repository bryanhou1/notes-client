import React, {Component} from 'react';

class NoteContainer extends Component {
  constructor(props) {
    super(props)

    this.state={
      title: "1",
      text: "1"
    }
  }

  componentWillReceiveProps() {
    const note = this.currentNote();

    if (note) {
      this.setState({
        title: note.title,
        text: note.text
      })
    }
  }

  currentNote() {
    const {notes, currentNoteId} = this.props;
    const note = notes.find((n) => n.id === parseInt(currentNoteId,10))
    return note;
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // debugger;
  };

  render() {
    const {notes, currentNoteId} = this.props;
    if (notes.length === 0 || currentNoteId === null) {
      return (
        <div>
          Select a note on the right or create a new note
        </div>
      )
    } else {
      return (
        <div>
          <input
            type="text"
            name="title"
            id="note-title"
            value={this.state.title}
            onChange={e => this.handleOnChange(e)}
            placeholder="Title"
          />
          <textarea 
            name="body"
            id="note-body"
            value={this.state.text}
            onChange={e => this.handleOnChange(e)}
            placeholder=""
          />
        </div>
      )
    }
    
  }
}

export default NoteContainer;
