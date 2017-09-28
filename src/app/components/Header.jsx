import React from "react";
/* This is a stateless component. Use them if you do not need state     */
/* That does not mean that it does not get rerendered if the props change */
/* It itself has no state */
export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
