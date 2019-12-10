import React from "react";

class CountLists extends React.Component {
    render () {
        return (
            <p>You have 
                <span>{this.props.count}</span>
                <span>{this.props.complete}</span>
            </p>
        );
    }
}

export default CountLists; 
