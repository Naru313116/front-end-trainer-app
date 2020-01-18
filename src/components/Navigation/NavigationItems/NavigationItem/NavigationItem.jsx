import React from "react";


const NavigationItem = (props) => {
    return (
        <React.Fragment>
            <li><a href="/">{props.children}</a></li>
        </React.Fragment>
    );
};
export default NavigationItem;