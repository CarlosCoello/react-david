import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleUsernameChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlePasswordChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }
    

    render() {
        return(
            <div>
                <h1>Login page</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="username"
                        onChange={this.handleUsernameChange} />

                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="password"
                        onChange={this.handlePasswordChange} />
                    <input type="submit" value="login" />
                </form>
            </div>
        )
    }


}

export default Login;