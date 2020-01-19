import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../UI/Logo/Logo";
import classes from './Toolbar.module.css';

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