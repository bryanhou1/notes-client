import React, {Component} from 'react';
import SaveStatus from './SaveStatus';
import SaveButton from './SaveButton';
import StarButton from './StarButton';
class StatusAndActionBar extends Component {

  render() {

    return (
      <div id="status-and-action-bar">
        <SaveStatus />
        <StarButton />
        <SaveButton />
      </div>
    )
  }
}

export default StatusAndActionBar;
