import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { loginValidationSchema } from '../schema/index';
import { ErrorMessage, Formik } from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { api } from '../setup/api';

import '../auth/Login.css';

export const SignUpForm = () => {
    const navigate = useNavigate();

    const handleForm = async (values, actions) => {
        const { name, email, password } = values;
        try {
            const res = await api.post('/supplierRegistration', { name, email, password })
            console.log(res.status);
            console.log(res.data);
            navigate('/');
            alert('Sign up successful!');
        } catch (error) {
            console.log('Sign up failed:', error);
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
                        <Form.Group className='mt-1'>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" name="email" value={values.email} onChange={handleChange} placeholder='Enter your email' />
                            <ErrorMessage name="email" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-3'>Password:</Form.Label>
                            <Form.Control type="password" name="password" value={values.password} onChange={handleChange} placeholder='Enter your password' />
                            <ErrorMessage name="password" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                        </Form.Group>
                        <Button type="submit" className="mt-3 w-100" variant='primary'>Continue</Button>
                        <div className="mt-3">
                            New Here ?<Link to={'/supplier/account'} className='mx-1'>Create an Account</Link>
                        </div>

                    </div>
                </Form>
            )}
        </Formik>
    );
};
