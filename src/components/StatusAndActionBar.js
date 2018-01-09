import React, {Component} from 'react';
import SaveStatus from './SaveStatus';
import SaveButton from './SaveButton';
import StarButton from './StarButton';
class StatusAndActionBar extends Component {

  render() {

    return (
      <div>
        <SaveStatus />
        <StarButton />
        <SaveButton />
      </div>
    )
  }
}

export default StatusAndActionBar;
