import React from 'react';

class HelloWorld extends React.Component { 
    render() { 
        return <h1 {...this.properties}> Hello {this.props.frameworkName} world!!! </h1> 
    } 
}

export default HelloWorld;

