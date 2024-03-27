import React, { useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link, useNavigate } from 'react-router-dom';
import { loginValidationSchema } from '../schema';
import { api } from '../setup/api';

import './Login.css';
import { setLocalStorage } from '../utils/local-storage';

export const LoginForm = () => {
    const [token, setToken] = useState({})

    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const handleForm = async (values, actions) => {
        const { name, email, password } = values;
        if (name === localStorage.getItem('name') && email === localStorage.getItem('email') && password === localStorage.getItem('password')) {
            console.log('Login Successfull')
        } else {
            console.log('Login Failed. Please try again.');
        }
        try {
            const res = await api.post('/login', { name, email, password })
            setToken(res.data)
            setLocalStorage('token', res.data.token)
            console.log({ token: res.data.token });
            navigate('/')
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={handleForm}
        >
            {({ values, errors, handleSubmit, handleChange }) => {
                console.log({ values, errors });
                return (
                    <Form onSubmit={handleSubmit}>
                        <div className="loginForm">
                            <Form.Group>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control
                                    type="name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder='Enter your name'
                                />
                                <ErrorMessage name="name" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                                <Form.Control.Feedback tooltip>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='mt-2'>Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder='Enter your email'
                                />
                                <ErrorMessage name="email" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                                <Form.Control.Feedback tooltip>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='mt-3'>Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder='Enter your password'
                                />
                                <ErrorMessage name="password" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                                <Form.Control.Feedback tooltip>
                                    Looks good!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit" className="mt-3 w-100" variant='primary'>Login</Button>
                            <div className="mt-3">
                                Don't have an account?
                                <Link to={'/register'} className='mx-2'>Sign Up</Link>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    );
};
