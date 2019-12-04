import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <h1 id="footer"> Text: {this.props.footer}</h1>
            </div>
        );
    }
}

export default Footer;