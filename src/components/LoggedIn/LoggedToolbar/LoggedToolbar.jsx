import React from "react";
import NavigationItems from "./LoggedNavigationItems/LoggedNavigationItems";
import Logo from "../../UI/Logo/Logo";
import classes from './LoggedToolbar.module.css';

const Toolbar = () =>{
    return(
        <header className={classes.Toolbar}>
            <div className={classes.Container}>
            <Logo/>
          <NavigationItems/>
            </div>
        </header>
    );
};
export default Toolbar;