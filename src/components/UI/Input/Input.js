import React from "react";
import classes from './Input.module.css';

const Input = props =>{

let inputElement =null;
switch (props.inputtype){
    case('input'):
        inputElement = <input className={classes.InputElement} {...props} />;
        break;
    case('textArea'):
        inputElement = <input className={classes.InputElement} {...props} />;
        break;
    case('submit'):
        inputElement = <input className={classes.Submit}  {...props} />;
        break;
    default:
        inputElement = <input className={classes.InputElement} {...props} />
}

    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;