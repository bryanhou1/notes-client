import React, {Component} from 'react';

class PrevButton extends Component {

  handleOnClick(e) {
    const prevNoteId = this.prevNoteId();
    if (prevNoteId) {
      this.props.switchCurrentNote(prevNoteId);
    }
  }

  prevNoteId() {
    const {notesArr, currentNoteId} = this.props;
    const prevIndex = notesArr.findIndex((note) => note.id === currentNoteId)-1;
    return (prevIndex === -1) ? null : notesArr[prevIndex].id;
  }

  disableButtonLogic() {
    return (this.prevNoteId()) ? "fa fa-chevron-left fa-lg" : "fa fa-chevron-left fa-lg fa-disabled"
  }

  render() {
    return (
      <span className="statusBarComponent">
        <i className={this.disableButtonLogic()} aria-hidden="true"  onClick={(e) => this.handleOnClick(e)}></i>
      </span>
    )
  }
}

export default PrevButton;