import React from 'react';
import {Redirect, Link} from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        let isLoggedIn = false;
        if(token) {
            isLoggedIn = true;
        }
        this.state = {
            isLoggedIn
        }
    }
    render() {
        if(this.state.isLoggedIn) {
            return (
                <div>
                    <h3>Home / Secured Page</h3>
                    <Link to="/logout">Logout</Link>
                </div>
            ) 
        }
        else {
            return <Redirect to="/" />
        }
    }
}
export default Home;