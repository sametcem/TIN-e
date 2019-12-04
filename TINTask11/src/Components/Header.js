import React from "react";
import Title from "./Title";


class Header extends React.Component {
    render() {
        return (
            <div>
                <Title titleText={this.props.header} />
            </div>
        );
    }
}

export default Header;