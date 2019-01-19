import React from "react";
//import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from './components/Container';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
//import Loading from './components/Loading';
/*const Test = Loadable({
    loader: () => import('./components/Test'),
    loading: Loading,
});*/

export default class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {show:true};
    }

    render() {
        return(
            <Router>
                <Container>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                    {/* <Route path="/test" component={Test}/> */}
                </Container>
            </Router>
        );
    }
}