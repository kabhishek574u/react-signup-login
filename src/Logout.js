import React from 'react';
import {Link} from 'react-router-dom'

class Logout extends React.Component {
    constructor(props) {
        super(props);
        localStorage.removeItem('token');
    }
    render() {
        return (
            <div>
                <h3>You have been logged out!</h3>
                <Link to="/"> Login</Link> Again
            </div>
        );
    }
}
export default Logout;