import React, {Component} from 'react';
import SaveStatus from './SaveStatus';
import SaveButton from './SaveButton';
import StarButton from './StarButton';
import DeleteButton from './DeleteButton';
class StatusAndActionBar extends Component {

  render() {
    const {submitNote} = this.props;
    return (
      <div id="status-and-action-bar">
        <SaveStatus />
        <StarButton />
        <SaveButton submitNote={submitNote}/>
        <DeleteButton />
      </div>
    )
  }
}

export default StatusAndActionBar;
