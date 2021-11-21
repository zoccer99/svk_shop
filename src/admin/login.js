import React from "react";
import axios from "axios";
import { Button, Form, Label } from "react-bootstrap";



class login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        };

        this.hash = this.hash.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // hash(plainPassword) {
    //     const bcrypt = require('bcrypt');
    //     const saltRounds = 10;

    //     bcrypt.hash(plainPassword, saltRounds, function(err,hash) {
    //         console.log(hash);
    //     });

    // }

    handleChange(event) {
        const target = event.target;
        const user = target.name;

        this.setState({
            [user]: target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.password);
        // console.log(hashthis.state.password);
    }

    render() {
        return (
            <div className="d-flex justify-content-center p-2">
                <Form className="loginFormWrapper" onSubmit={this.handleSubmit}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleChange}>
                    </Form.Control>
                    <Form.Label className="pt-4">Passwort</Form.Label>
                    <Form.Control name="password" type="text" value={this.state.password} onChange={this.handleChange}>
                    </Form.Control>
                    <Button className="mt-3" type="submit" value="login" onClick={this.setState.handleSumbit}>Login</Button>
                </Form>
            </div>
        )
    }
}


export default login;