import React from "react";
import Background from "./Background/Background";
import SignInButton from "./SignInButton/SignInButton";

const MainPage = () =>{
    return(
        <section>
            <main>
                <Background/>
               <SignInButton>Sign In!</SignInButton>
            </main>
        </section>
    );


};

export default MainPage;