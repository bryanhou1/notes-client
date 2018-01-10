import React, {Component} from 'react';

class NextButton extends Component {

  handleOnClick(e) {
    const {switchCurrentNote, currentNoteId} = this.props;
    const nextNoteId = this.nextNoteId();
    if (nextNoteId) {
      switchCurrentNote(nextNoteId);
    }
  }

  nextNoteId() {
    const {notesArr, currentNoteId} = this.props;
    const nextIndex = notesArr.findIndex((note) => note.id === currentNoteId)+1;
    return (nextIndex === notesArr.length) ? null : notesArr[nextIndex].id;
  }

  disableButtonLogic() {
    return (this.nextNoteId()) ? "fa fa-chevron-right fa-lg" : "fa fa-chevron-right fa-lg fa-disabled"
  }
  render() {
    return (
      <span className="statusBarComponent">
        <i className={this.disableButtonLogic()} aria-hidden="true"  onClick={(e) => this.handleOnClick(e)}></i>
      </span>
    )
  }
}

export default NextButton;