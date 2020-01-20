import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.module.css';

const NavigationItems = () =>{
    return(
            <nav className={classes.NavigationItems}>
                <ul>
                   <NavigationItem pathname="/">Home</NavigationItem>
                    <NavigationItem pathname="/about">Contact</NavigationItem>
                    <NavigationItem pathname="/login">Login</NavigationItem>
                </ul>
            </nav>

    );
};
export default NavigationItems;