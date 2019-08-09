import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Container from '@material-ui/core/Container';


class LoginPage extends Component {

    render() {
        return (
        <Container maxWidth="sm">
            <div>
                <Container>
                <label>
                    Username:
                <input type="text" name="username" />
                </label>
                </Container>
                <Container>
                <label>
                    Password:                 
                    <input type="password" name="password" />
                </label>
                </Container>
                <Container>
                <button onClick={() => {
                    this.props.history.push("/employeepage")
                }}>Login</button>
                </Container>
            </div>
        </Container>
        )
    }
}

export default LoginPage;
