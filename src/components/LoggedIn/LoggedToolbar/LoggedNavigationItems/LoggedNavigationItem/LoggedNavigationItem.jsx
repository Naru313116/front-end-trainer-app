import React from "react";
import classes from './LoggedNavigationItem.module.css';
import {NavLink} from "react-router-dom";

const LoggedNavigationItem = (props) => {
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
export default LoggedNavigationItem;