import React from "react";
import background from '../../../assets/images/background.jpg';
import classes from './Background.module.css';
const Background = () =>{
    return(
        <React.Fragment>
           <img src={background} className={classes.Background}/>
        </React.Fragment>

    );


};

export default Background;