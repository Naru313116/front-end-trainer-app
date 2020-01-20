import React from "react";

import classes from './Background.module.css';
const Background = (props) =>{
    return(
        <React.Fragment>
           <img src={props.name} className={classes.Background} alt="tło"/>
        </React.Fragment>

    );


};

export default Background;