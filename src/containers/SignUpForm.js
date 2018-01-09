import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register, removeMessage} from '../actions/index'; //refractor
import Messages from '../components/Messages';
import {Redirect} from 'react-router-dom';

class SignUpForm extends Component {
  state = {
    redirectToReferrer: !!localStorage.token,
    email: "",
    password: "",
    username: "",
    name: "",
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
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Messages messages={this.props.alert.messages} />
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="form-group">
                  <label> Name : </label>
                  <input className="form-control" id="signup-name" type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label> Email : </label>
                  <input className="form-control" id="signup-email" type="text" name="email" value={this.state.email} onChange={e => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label name="password"> Password : </label>
                  <input className="form-control" id="signup-password" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
                </div>
                <div className="form-group">
                  <label> Username : </label>
                  <input className="form-control" id="signup-username" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                </div>

                <div>
                  <button type="submit" className="btn btn-default">Register</button>
                </div>
              </form>
            </div>
          </div>
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

export default connect(mapStateToProps, {register, removeMessage})(SignUpForm);