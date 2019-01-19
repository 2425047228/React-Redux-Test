import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {

    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/test">Test</Link></li>
            </ul>
        );
    }
}