import { useState } from "react"
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';
import axios from "axios";
import Nav from './nav';

const client = axios.create({
    baseURL: "http://206.189.40.198/api/register"
});

export default function Register() {
    const navigate = useNavigate();
    const { http, setToken } = AuthUser();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(name, email, password);
    };

    const addPosts = (name, email, password) => {
        client
            .post('', {
                name: name,
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response);
                setName('')
                setEmail('')
                setPassword('')
                navigate('/login')
            }).catch(err => {
                console.log(err)
            })
    };

    return (
        <div className="row justify-content-left pt-5">
            <Nav/>
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Register </h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="test" className="form-control" placeholder="Enter name"
                            onChange={e => setName(e.target.value)}
                            id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                            id="email" />
                    </div>

                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                            id="pwd" />
                    </div>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary mt-4" to="/login">Register</button>
                </div>
            </div>
        </div>


    )

}

