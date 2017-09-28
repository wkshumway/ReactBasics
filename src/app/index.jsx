import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header.jsx";
import {Home} from "./components/Home.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true,
        };
    }

    onGreet() {
        alert("Hello");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName,
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        });
    }
    render() {
       let homeCmp = "";
       if (this.state.homeMounted) {
           homeCmp = (
                <Home 
                    name={"Elle"} 
                    initialAge={21} 
                    greet={this.onGreet}
                    // This function call has to be written this way
                    // so that it will refer to the original function instead of
                    // trying to find that function within the element from 
                    // which it ends up being called
                    changeLink={this.onChangeLinkName.bind(this)}
                    initialLinkName={this.state.homeLink}
                />
           );
       }
       return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                        {/* The line below is like a call to a constructor. Each item passed is like an argument passed to a constructor */}
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)Mount Home Component</button>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
