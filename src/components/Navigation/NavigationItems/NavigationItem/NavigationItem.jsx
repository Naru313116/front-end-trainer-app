import React from "react";
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <React.Fragment>
            <li className={classes.NavigationItem}>
                <a href="/">{props.children}</a>
            </li>
        </React.Fragment>
    );
};
export default NavigationItem;