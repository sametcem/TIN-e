/* eslint-disable no-unused-vars */
import React, { Component } from 'react'


export default class Form extends Component {

    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password:"",
        firstNameError: "",
        lastNameError: "",
        userNameError: "",
        emailError: "",
        passwordError: ""
    };

    
    change = (e) => {
        this.props.onChange({[e.target.name]: e.target.value})
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let firstNameError= "";
        let lastNameError= "";
        let userNameError= "";
        let emailError= "";
        let passwordError= "";

        if(!this.state.firstName) {
            firstNameError = "First Name cannot be empty!"
        }

        if (!this.state.lastName) {
            lastNameError = "Last Name cannot be empty!"
        }

        if (this.state.username.length < 3) {
            userNameError = "User name should contain min 3 characters!"
        }

        if(!this.state.email.includes("@")) {
            emailError = "Invalid Email!"
        }

        if (this.state.password.length < 8) {
            passwordError = "Password should contain more than 8 characters!"
        }

        

        if(emailError || firstNameError || lastNameError || userNameError || passwordError){
            this.setState({emailError, firstNameError, lastNameError, userNameError, passwordError});
            return false;
        }

        return true;

    }

    onSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                password: "",
                firstNameError: "",
                lastNameError: "",
                userNameError: "",
                emailError: "",
                passwordError: ""
            });


            this.props.onChange({
                firstName: "",
                lastName: "",
                username: "",
                email: "",
                password: ""
            });
        }
    }

    render() {
        return (
            <form>
                <input 
                name= 'firstName'
                placeholder="First Name" 
                value={this.state.firstName} 
                onChange={e => this.change(e)}
                />
                <div style={{ fontSize: 12, color: 'red' }}> {this.state.firstNameError}</div>
                <br />

                <input
                    name= 'lastName'
                    placeholder="Last Name"
                    value={this.state.lastName}
                   // onChange={e => this.setState({ lastName: e.target.value })}  Duplicated Code
                    onChange={e => this.change(e)}
                />
                <div style={{fontSize: 12, color: 'red'}}> {this.state.lastNameError}</div>
                <br />

                <input
                    name='username'
                    placeholder="User Name"
                    value={this.state.username}
                    onChange={e => this.change(e)}
                />
                <div style={{ fontSize: 12, color: 'red' }}> {this.state.userNameError}</div>
                <br />
                <input
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                />
                <div style={{ fontSize: 12, color: 'red' }}> {this.state.emailError}</div>
                <br />
                
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                />
                <div style={{ fontSize: 12, color: 'red' }}> {this.state.passwordError}</div>
                <br />


                <button onClick={e  => this.onSubmit(e)}> Submit </button>
            </form> 
        )
    }
}

