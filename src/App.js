import React, { Component } from 'react';
// import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
//Pages
import LoginPage from './containers/LoginPage';
import EmployeePage from './containers/EmployeePage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {withRouter} from 'react-router';


class App extends Component {

  render() {
    return (
      <Router>
          <Route exact strict path="/login" component = {LoginPage}/>
          <Route exact strict path="/employeepage" component = {EmployeePage}/>
      </Router>
    )
  }
}

export default withRouter(App);
