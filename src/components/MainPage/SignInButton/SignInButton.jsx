import React from "react";
import classes from './SignInButton.module.css';

const SignInButton = (props) => {
    return (
        <button className={classes.Button}>{props.children}</button>

    );
};

export default SignInButton;