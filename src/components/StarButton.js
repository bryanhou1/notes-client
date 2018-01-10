import React, {Component} from 'react';

class StarButton extends Component {

  handleOnClick(e) {
    const {updateNote, currentNote} = this.props;
    updateNote(currentNote, "starred", !currentNote.starred);
  }

  buttonLogic() {
    return this.props.currentNote.starred ? "fa fa-star fa-lg" : "fa fa-star-o fa-lg"
  }

  render() {
    return (
      <span className="statusBarComponent">
        <i className={this.buttonLogic()} aria-hidden="true"  onClick={(e) => this.handleOnClick(e)}></i>
      </span>
    )
  }
}

export default StarButton;