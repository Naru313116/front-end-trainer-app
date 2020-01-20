import React from "react";
import LoggedNavigationItem from "./LoggedNavigationItem/LoggedNavigationItem";
import classes from './LoggedNavigationItems.module.css';

const LoggedNavigationItems = () =>{
    return(
            <nav className={classes.NavigationItems}>
                <ul>
                    <LoggedNavigationItem pathname="/">Home</LoggedNavigationItem>
                    <LoggedNavigationItem pathname="/users">Get Users</LoggedNavigationItem>
                    <LoggedNavigationItem pathname="/logout">Logout</LoggedNavigationItem>
                </ul>
            </nav>

    );
};
export default LoggedNavigationItems;