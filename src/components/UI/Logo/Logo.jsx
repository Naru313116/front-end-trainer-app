import React from "react";
import lotusLogo from '../../../assets/images/logo.png';
import classes from './Logo.module.css';

const Logo = () =>{
    return(
       <div className={classes.Logo}>
          <img src={lotusLogo} alt="logo"/>
       </div>
    );
};
export default Logo;