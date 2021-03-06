import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header.jsx";
import {Home} from "./components/Home.jsx";

class App extends React.Component {

    render() {
        
        var user = {
            name: "Anna",
            hobbies: ["Sewing", "Printing"]
        };
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Elle"} age={21} user={user}>
                            <p>This is a paragraph</p>
                            </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
