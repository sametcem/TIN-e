import React from 'react';

class SmallForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login : "",
            secret: ""
        }
    }

    loginHandleChange(event) { 
        this.setState({login: event.target.value}) 
    }
    secretHandleChange(event) { 
        this.setState({secret: event.target.value}) 
    }

    render() { 
        return <div>
            <form>
                Login: <input type="text" name="login" value={this.state.login} onChange={this.loginHandleChange.bind(this)}></input><br/>
                Password: <input type="password" name="secret" value={this.state.secret} onChange={this.secretHandleChange.bind(this)}></input>
            </form>
            </div>
    }
}
    
export default SmallForm;

