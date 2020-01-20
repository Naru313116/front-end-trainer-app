import React, {Component} from "react";
import Background from "./Background/Background";
import SignInButton from "./SignInButton/SignInButton";
import classes from './MainPage.module.css';
import background from '../../assets/images/background.jpg';


class MainPage extends Component{


    render() {

    return(
        <section className={classes.MainPage}>
            <main>

                <Background name={background}/>
                <h1>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. A alias cumque eveniet
                    laudantium magni nisi repellat velit? Adipisci corporis,
                    eaque?</h1>
                <h2>Lorem ipsum dolor sit amet.</h2>
               <SignInButton destiny="/register">Sign In!</SignInButton>
            </main>
        </section>
    );
}

}

export default MainPage;