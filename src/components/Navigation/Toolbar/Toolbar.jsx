import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../UI/Logo/Logo";


const Toolbar = () =>{
    return(
        <header>
            <Logo/>
          <NavigationItems/>
        </header>
    );
};
export default Toolbar;