import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    render() {
        
        return (
            <div>
                <section>
                    <Header header="TIN Task 11(s17181)" />
                </section>
                
                <div>
                    <Footer footer={this.props.footer} />
                </div>
            </div>
        );
    }
}
