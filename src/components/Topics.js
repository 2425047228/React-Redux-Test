import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import Topic from './Topic';


export default class Topics extends Component {

    render() {
        let match = this.props.match;
        console.log(match);
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
                </ul>

                <Route path={`${match.path}/:id`} component={Topic} />
                <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>}/>
            </div>
        );
    }
}