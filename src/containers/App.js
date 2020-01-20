import React from 'react';
import Layout from "../hoc/Layout/Layout";
import MainPage from "../components/MainPage/MainPage";
import RegistrationPage from "../components/RegistrationPage/RegistrationPage";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import LoginPage from "../components/LoginPage/LoginPage";
import LoggedIn from "../components/LoggedIn/LoggedIn";
import Users from "../components/LoggedIn/Users/Users";


function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/loggedIn' exact component={LoggedIn}/>
                <Route path='/users' exact component={Users}/>

                <div className="App">
                    <Layout>

                        <Switch>
                            <Route path='/register' exact component={RegistrationPage}/>
                            <Route path='/login' exact component={LoginPage}/>
                            <Route path='/' exact component={MainPage}/>
                            {/* <Route path='/r/:registered' render={()=> <Modal/>}/>*/}
                            <Route render={() => <h1 style={{textAlign: 'center'}}>Not Found</h1>}/>
                        </Switch>
                    </Layout>

                </div>
            </Switch>
        </BrowserRouter>

    );
}

export default App;
