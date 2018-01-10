import React, {Component} from 'react';

class SaveButton extends Component {
  
  handleOnClick(e) {
    e.preventDefault();
    this.props.submitNote();
  }


disableButtonLogic() {
  const {currentNote} = this.props;
  return currentNote.isSaving || !currentNote.modified ? "fa fa-floppy-o fa-lg fa-disabled" : "fa fa-floppy-o fa-lg"
}
  render() {
    return (
      <span className="statusBarComponent">
        <i className={this.disableButtonLogic()} aria-hidden="true" onClick={(e) => this.handleOnClick(e)}/>
      </span>
    )
  }
}

export default SaveButton;