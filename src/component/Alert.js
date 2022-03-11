import React, { Component } from 'react';
class Alert extends Component {
    render() {
        return (
            <div className={"alert alert-" + this.props.type} id="alr">
                <h6>{this.props.children} </h6>
            </div>
        );
    }
}
export default Alert;  