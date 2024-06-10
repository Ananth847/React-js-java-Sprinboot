import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddUser() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        studentName: '',
        lastName: '',
        email: '',
    });

    const { studentName, lastName, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/data/save', user);
        navigate('/');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>

                    <form onSubmit={onSubmitHandler}>
                        <div className="mb-3">
                            <label htmlFor="studentName" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                                name="studentName"
                                value={studentName}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your username"
                                name="lastName"
                                value={lastName}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                E-mail
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your e-mail address"
                                name="email"
                                value={email}
                                onChange={onInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Button className="btn btn-danger mx-2" onClick={() => navigate('/')}>
                            Cancel
                        </Button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}
