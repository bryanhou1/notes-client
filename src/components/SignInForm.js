import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index'; //refractor

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    debugger;
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    if (email && password) {
      this.props.login({email: email, password: password});

    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label> Email : </label>
          <input id="login-email" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>
        <div>
          <label name="password"> Password : </label>
          <input id="login-password" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}


const mapStateToProps = (state) => {
  //need conditional later
  return {
    currentUser: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
