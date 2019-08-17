import React from 'react';
import {Redirect} from 'react-router-dom';
import Home from './Home'
class Login extends React.Component {
    state = {
        username: '',
        password: '',
        isLoggedIn: false
    }
    constructor(props) {
        super(props);
        const token = localStorage.getItem('token');
        let isLoggedIn = false;
        if(token) {
            isLoggedIn = true;
        }
        this.state = {
            username: '',
            password: '',
            isLoggedIn
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        console.log(username + ' ' + password);
        // login logic
        if(username === 'abhi' && password === '123') {
            localStorage.setItem("token", "123456789");
            this.setState({
                isLoggedIn: true
            });
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        if(this.state.isLoggedIn) {
            return <Redirect to="/admin" />
        }
        else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit} >
                        <input 
                            type='text' 
                            value={this.state.username} 
                            placeholder='Username'
                            name='username'
                            onChange={this.handleChange}
                        /><br />
                        <input 
                            type='password' 
                            value={this.state.password} 
                            placeholder='Password'
                            name='password'
                            onChange={this.handleChange}                        
                        /><br />
                        <input type='submit' name='login' />
                    </form>
                </div>            
            );    
        }
    }

}

export default Login;