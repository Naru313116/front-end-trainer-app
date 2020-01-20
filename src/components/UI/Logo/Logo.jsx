import React from "react";
import lotusLogo from '../../../assets/images/logo.png';
import classes from './Logo.module.css';
import {Link} from "react-router-dom";
const Logo = () =>{
    return(
       <div className={classes.Logo}>
          <Link to='/' > <img src={lotusLogo} alt="logo"/></Link>
       </div>
    );
};
export default Logo;