/* eslint-disable no-unused-vars */
import React from "react";

export default class Title extends React.Component {
    render() {
        return (
            <div style={headerStyle} className>
                <h1 id="title">{this.props.titleText}</h1>
            </div>
        );
    }
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
