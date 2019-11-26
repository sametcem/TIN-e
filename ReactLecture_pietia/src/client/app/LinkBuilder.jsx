import React from 'react';

class LinkBuilder extends React.Component {
    render() {
        return <a href={this.props.url} title={this.props.label} target="_blank">{this.props.label}</a>
    }
}

export default LinkBuilder;
