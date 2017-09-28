import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge, //using props in state should only be done for initual values
            status: 0,
            homeLink: props.initialLinkName, 
        };
        setTimeout(() => {
            this.setState({
                status: 1,
            });
        }, 3000);
        console.log("Constructor");
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount!");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update?", nextProps, nextState);
        // The next line overrides the default behavior of JS
        // Nice that there is a built in nextState object
        // if (nextState.status === 1) {
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }
    onMakeOlder() {
        //this.age += 3; doesn't work because "this" refers
        // to whatever is being excuted, in this case the button
        this.setState({
            age: this.state.age + 3
        })
     }

    onChangeLink() {
        // Call the index.jsx changeLink function in order to
        // change the link where it can be accessed by header
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            //target is the target of the event (the input field)
            // value is the value of that input field
            homeLink: event.target.value,
        });
    }

    render() {
        var text = "Something!";
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Your name is {this.props.name}, your age is {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} 
                    onChange={(event) => this.onHandleChange(event)}/>
                
                {/*not button onChangeLink, but home.onChangeLink*/
                /* that is why we have to put .bind(this) */}
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
                {/*The above line causes a state change in App */}
           </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string, /*find types on React website*/
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string,
};