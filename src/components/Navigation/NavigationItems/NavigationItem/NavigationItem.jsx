import React from "react";
import classes from './NavigationItem.module.css';
import {NavLink} from "react-router-dom";

const NavigationItem = (props) => {
    return (
        <React.Fragment>
            <li className={classes.NavigationItem}>
                <NavLink
                    to={props.pathname}
                    exact
                    activeClassName={classes.Active}>
                    {props.children}
                </NavLink>
            </li>
        </React.Fragment>
    );
};
export default NavigationItem;