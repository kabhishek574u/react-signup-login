import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Home from './Home';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/admin" exact component={Home} /> 
        <Route exact path="/" component={Login} /> 
        <Route exact path="/logout" component={Logout} /> 
      </Router>
    );  
  }
}
export default App;
