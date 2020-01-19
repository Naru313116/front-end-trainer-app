import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.module.css';

const NavigationItems = () =>{
    return(
            <nav className={classes.NavigationItems}>
                <ul>
                   <NavigationItem>Home</NavigationItem>
                    <NavigationItem>Contact</NavigationItem>
                    <NavigationItem>Login</NavigationItem>
                </ul>
            </nav>

    );
};
export default NavigationItems;