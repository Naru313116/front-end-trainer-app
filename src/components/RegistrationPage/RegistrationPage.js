import React, {Component} from "react";

import Input from "../UI/Input/Input";
import classes from './RegistrationPage.module.css';
import Background from "../MainPage/Background/Background";
import background from '../../assets/images/registration-background.jpg';
import axios from '../../axios-register';
import Spinner from "../UI/Spinner/Spinner";


class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            },
            loading: false,
            registerPage: false,

        }

    }

    componentDidMount() {
        this.setState({registerPage: true})
    }

    handleSubmit = (event) => {
        this.setState({
            loading: true

        });

        event.preventDefault();
        axios.post('/clients', this.state.data)
            .then(response => {
                console.log(response);
                this.setState({
                    loading: false,

                });

                this.props.history.replace("/");

            })
            .catch(error => {
                console.log(error);
            });


    };

    firstNameChangeHandler = (event) => {
        const data = {...this.state.data};
        data.firstName = event.target.value;
        this.setState({
            data: data
        })
    };
    lastNameChangeHandler = (event) => {
        const data = {...this.state.data};
        data.lastName = event.target.value;
        this.setState({
            data: data
        })
    };
    emailChangeHandler = (event) => {
        const data = {...this.state.data};
        data.email = event.target.value;
        this.setState({
            data: data
        })
    };
    passwordNameChangeHandler = (event) => {
        const data = {...this.state.data};
        data.password = event.target.value;
        this.setState({
            data: data
        })
    };

    render() {
        let showForm = null;


        showForm = (<form>
            <Input label="First name" inputtype="input" onChange={this.firstNameChangeHandler} type="text"
                   name="firstName"
                   placeholder="Your name"/>
            <Input label="Last name" inputtype="input" onChange={this.lastNameChangeHandler} type="text"
                   name="lastName" placeholder="Your name"/>
            <Input label="Email address" inputtype="input" onChange={this.emailChangeHandler} type="text"
                   name="email"
                   placeholder="Your name"/>
            <Input label="Password" inputtype="input" onChange={this.passwordNameChangeHandler}
                   type="password" name="password"
                   placeholder="Your name"/>
            <Input inputtype="submit" type="submit" onClick={this.handleSubmit}/>
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

export default RegistrationPage;
