import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Home extends Component {
	
	render () {
		return (
      <div className="container-fluid">
        <div className="row">
          <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Overview <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Analytics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Export</a>
              </li>
            </ul>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">Nav item</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nav item again</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">One more nav</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Another nav item</a>
              </li>
            </ul>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">Nav item again</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">One more nav</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Another nav item</a>
              </li>
            </ul>
          </nav>
          <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
            <h1>Dashboard</h1>
            // <section className="row text-center placeholders">
            //   <div className="col-6 col-sm-3 placeholder">
            //     <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width={200} height={200} className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
            //     <h4>Label</h4>
            //     <div className="text-muted">Something else</div>
            //   </div>
            //   <div className="col-6 col-sm-3 placeholder">
            //     <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width={200} height={200} className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
            //     <h4>Label</h4>
            //     <span className="text-muted">Something else</span>
            //   </div>
            //   <div className="col-6 col-sm-3 placeholder">
            //     <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width={200} height={200} className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
            //     <h4>Label</h4>
            //     <span className="text-muted">Something else</span>
            //   </div>
            //   <div className="col-6 col-sm-3 placeholder">
            //     <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width={200} height={200} className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
            //     <h4>Label</h4>
            //     <span className="text-muted">Something else</span>
              </div>
            </section>
          </main></div>
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



