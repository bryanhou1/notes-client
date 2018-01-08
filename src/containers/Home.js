import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import './Home.css'

class Home extends Component {
	componentDidMount() {
    this.props.fetchNotes(localStorage.token);
  }

	render () {
		return (
      <div className="container-fluid">
        <div className="sidenav">
          
        </div>

        <div id="main">
          
        </div>
      </div>
		)
	}
}



const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);



