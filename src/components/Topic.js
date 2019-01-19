import React, {Component} from "react";


export default class Topic extends Component {

    render() {
        let match = this.props.match;
        return (
            <h3>Requested Param: {match.params.id}</h3>
        );
    }
}