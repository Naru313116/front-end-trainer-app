import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import LoggedToolbar from "../LoggedToolbar/LoggedToolbar";
import axios from '../../../axios-register';
import Spinner from '../../UI/Spinner/Spinner';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: true
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        });
        axios.get('/clients')
            .then(response => {
                this.setState({
                    loading: false,
                    data: response.data
                });
                console.log(response.data);

            })
            .catch(error => console.log(error))
    }

    render() {

        let tablesLoaded = null;
        if (this.state.loading) {
            tablesLoaded = <Spinner/>
        }else {
            let each = this.state.data.map((person,index) => {
                return<tr key={index}>
                    <td>{person.id}</td>
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.email}</td>
                </tr>
            });
        tablesLoaded = (<Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email address</th>
            </tr>
            </thead>
            <tbody>
            {each}
            </tbody>
        </Table>);
        }

        return (
            <div>
                <LoggedToolbar/>
                {tablesLoaded}
            </div>

        );
    }

}

export default Users;