import React from 'react';

class SignInLink extends React.Component { 
    render() { 
        return <div>
            {
            ((sessionFlag)=>{ 
                if (sessionFlag) 
                    return <a href='/logout'>Logout</a> 
                else 
                    return <a href='/login'>Login</a> 
            })(this.props.user) }
        </div>
    } 
}

export default SignInLink;

