import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Registration extends Component {
  render() {
    return (
      <div className="App">
        <h1>Registration Page</h1>
        <form>
            <input placeholder="Name"/><br />
            <input placeholder="Email"/><br />
            <input placeholder="Phone"/><br />
            <input placeholder="Address"/><br />
            <button>Register</button>
        </form>
        <Link to="/login/">Login</Link>
      </div>
    );
  }
}
export default Registration;