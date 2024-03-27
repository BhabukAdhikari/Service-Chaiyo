import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { loginValidationSchema } from '../schema';
import { ErrorMessage, Formik } from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { api } from '../setup/api';
import { Toaster } from '../components/Toast/Toast';

import './Login.css';

export const SignUpForm = () => {
    const [isSigned, setIsSigned] = useState(false)
    const navigate = useNavigate();

    const handleForm = async (values, actions) => {
        const { name, email, password } = values;
        try {
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            console.log({ name, email, password });
            const res = await api.post('/registration', { name, email, password })
            console.log(res.status);
            setIsSigned(true)
            navigate('/login');
        } catch (error) {
            alert('Sign up failed. Please try again.');
        }
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={loginValidationSchema}
            onSubmit={handleForm}
        >
            {({ values, handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <div className="loginForm">
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="name" name="name" value={values.name} onChange={handleChange} placeholder='Enter your name' />
                            <ErrorMessage name="name" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-2'>Email:</Form.Label>
                            <Form.Control type="email" name="email" value={values.email} onChange={handleChange} placeholder='Enter your email' />
                            <ErrorMessage name="email" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-3'>Password:</Form.Label>
                            <Form.Control type="password" name="password" value={values.password} onChange={handleChange} placeholder='Enter your password' />
                            <ErrorMessage name="password" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                        </Form.Group>
                        <Button type="submit" className="mt-3 w-100" variant='primary'>SignUp</Button>
                        <div className="mt-3">
                            Already have an account? <Link to={'/login'} className='mx-2'>Login</Link>
                        </div>
                        {isSigned === true ? <Toaster /> : null}
                    </div>
                </Form>
            )}
        </Formik>
    );
};
