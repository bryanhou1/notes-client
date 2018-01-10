import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserPage extends Component {
  render() {
    const {currentUser} = this.props;
    return (
      <div class="container">
        <div class="row">
          <div class="col col-md-6 col-md-offset-3">
            <h4> User Details </h4>
            <dl>
              <dt>Name:</dt>
              <dd>{currentUser.name}</dd>
              <dt>Username:</dt>
              <dd>{currentUser.username}</dd>
              <dt>Email:</dt>
              <dd>{currentUser.email}</dd>
            </dl>
          </div>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user
  }
};

export default connect(mapStateToProps, {})(UserPage);