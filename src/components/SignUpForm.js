import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index'; //refractor
import Messages from './Messages';
import {Redirect} from 'react-router-dom';
// import isLoggedIn from '../helpers/isLoggedIn'; //doesn't work 


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: !!localStorage.token,
      email: "",
      password: "",
      username: "",
      name: "",
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password, name, username} = this.state;
    
    this.props.register({email: email, password: password, username: username, name: name}).then((status) => {
      this.setState({redirectToReferrer: (status === 201)}) 
    })
  }

  componentDidMount() {
    this.props.removeMessage();
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/sign_in' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    } else {
      return (
        <div>
          <Messages messages={this.props.alert.messages} />
          <form onSubmit={e => this.handleSubmit(e)}>
            <div>
              <label> Name : </label>
              <input id="signup-name" type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
            </div>
            <div>
              <label> Email : </label>
              <input id="signup-email" type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
            </div>
            <div>
              <label name="password"> Password : </label>
              <input id="signup-password" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
            </div>
            <div>
              <label> Username : </label>
              <input id="signup-username" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
            </div>

            <div>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      );
    }


  }
}


const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);