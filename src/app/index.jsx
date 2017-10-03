import React from "react";
import ReactDom from "react-dom";
import {render} from "react-dom";
import {Router, Route, IndexRout} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
const newHistory = createBrowserHistory();

import {Header} from "./components/Header.jsx";
import {Root} from "./components/Root.jsx"
import {Home} from "./components/Home.jsx";
import {User} from "./components/User.jsx";

class App extends React.Component {

    render() {
   
        return (
            <Router history={newHistory}>
                <div>                
                     <Route path="/" component={Root}/>
                     <Route path="/user" component={User}/>
                     <Route path="/home" component={Home}/>
                     <Route exact path="/" component={Home}/>
                </div>
          </Router>
        );
    }
}

render(<App />, window.document.getElementById('app'));