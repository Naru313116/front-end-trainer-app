import React, {Component} from "react";

import Input from "../UI/Input/Input";
import classes from './LoginPage.module.css';
import Background from "../MainPage/Background/Background";
import background from '../../assets/images/login-background.jpg';
import axios from '../../axios-register';
import Spinner from "../UI/Spinner/Spinner";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                login: '',
                password: ''

            },
            loading: false,

        }

    }

    componentDidMount() {

    }

    handleLogin = (event) => {
        this.setState({
            loading: true

        });

        event.preventDefault();
        axios.get('/clients/?login='+this.state.data.login+'&password='+this.state.data.password)
            .then(response => {
                console.log(response);
                this.setState({
                    loading: false,
                });
            if(response.data){
                this.props.history.replace('/loggedIn');
            }


            })
            .catch(error => {
                console.log(error);
            });


    };

   loginChangeHandler = (event) => {
        const data = {...this.state.data};
        data.login = event.target.value;
        this.setState({
            data: data
        })
    };

    passwordChangeHandler = (event) => {
        const data = {...this.state.data};
        data.password = event.target.value;
        this.setState({
            data: data
        })
    };

    render() {
        let showForm = null;


        showForm = (<form>
            <Input label="First name" inputtype="input" onChange={this.loginChangeHandler} type="text"
                   name="firstName"
                   placeholder="Your name"/>

            <Input label="Password" inputtype="input" onChange={this.passwordChangeHandler}
                   type="password" name="password"
                   placeholder="Your name"/>
            <Input inputtype="submit" type="submit" onClick={this.handleLogin}/>
        </form>);
        if (this.state.loading) {
            showForm = <Spinner/>
        }

        return (


            <React.Fragment>
                <Background name={background}/>
                <div className={classes.Form}>
                    {showForm}
                </div>
            </React.Fragment>
        );
    }

}

export default LoginPage;
