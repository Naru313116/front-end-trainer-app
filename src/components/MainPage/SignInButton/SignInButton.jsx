import React from "react";
import classes from './SignInButton.module.css';
import {Link} from "react-router-dom";

const SignInButton = (props) => {
    return (
        <Link to={props.destiny}>
            <button
                    className={classes.Button}>{props.children}</button>
        </Link>

    );
};

export default SignInButton;