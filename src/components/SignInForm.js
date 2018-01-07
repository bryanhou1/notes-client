import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/index'; //refractor
import Messages from './Messages';
import {Redirect} from 'react-router-dom';
// import isLoggedIn from '../helpers/isLoggedIn'; //doesn't work 


class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: !!localStorage.token,
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    if (email && password) {
      this.props.login({email: email, password: password}).then((status) => {
        this.setState({redirectToReferrer: (status === 201)})
      })
    }
  }

  componentDidMount() {
    this.props.removeMessage();
  }

  componentWillUnmount() {
    if (localStorage.token) {
      this.props.fetchUser(localStorage.token)
    }
    
  }
  
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div>
                <Messages messages={this.props.alert.messages} />
                <form onSubmit={e => this.handleSubmit(e)}>
                  <div className="form-group">
                    <label> Email : </label>
                    <input id="login-email" className="form-control" type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                  </div>
                  <div className="form-group">
                    <label name="password"> Password : </label>
                    <input id="login-password" className="form-control" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-default">Log in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    alert: state.alert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);