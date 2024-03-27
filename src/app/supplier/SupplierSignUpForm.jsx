import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ErrorMessage, Formik } from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { SupplierValidation } from '../schema';
import { api } from '../setup/api';

import '../auth/Login.css';

export const SignUpForm = () => {
    
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
    
            const res = await api.post('/login', values, config);
            console.log("Form submitted successfully:", res.data);
            navigate('/supplier')
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={SupplierValidation}
            onSubmit={handleSubmit}
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
