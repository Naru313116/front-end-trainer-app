import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";


const NavigationItems = () =>{
    return(
            <nav>
                <ul>
                   <NavigationItem>Home</NavigationItem>
                    <NavigationItem>Contact</NavigationItem>
                    <NavigationItem>Login</NavigationItem>
                </ul>
            </nav>

    );
};
export default NavigationItems;