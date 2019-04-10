import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="App">
        <h1>Login Page</h1>
        <form>
            <input placeholder="Email" type="text" /><br />
            <input placeholder="Password" type="password" /><br />
            <button>Login</button>
        </form>
        <Link to="/registration/">Registration</Link>
      </div>
    );
  }
}
export default Login;