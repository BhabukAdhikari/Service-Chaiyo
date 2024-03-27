import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import { SupplierValidation } from '../schema/index';
import { ErrorMessage, Formik } from 'formik';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { api } from '../setup/api';

import '../auth/Login.css';

export const SupplierAccount = () => {

    const handleForm = async (values, { setSubmitting }) => {
        const { companyName, phoneNumber, address, panNumber, establishedDate } = values;
        try {
            const res = await api.post('/supplierInfo', { companyName, phoneNumber, address, panNumber, establishedDate })
            console.log(res.status);
            console.log(res.data);
            alert('Sign up successful!');
        } catch (error) {
            console.log('Failed creating account:', error);
            alert('Failed creating account');
        }
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{ companyName: '', phoneNumber: '', address: '', panNumber: '', establishedDate: new Date().toISOString().split('T')[0] }}
            // validationSchema={SupplierValidation}
            onSubmit={handleForm}
        >
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <p>
                        Already Have an Account ? <Link to='/supplier/sign-up'>Sign-up</Link>
                    </p>
                    <div className="loginForm">
                        <Form.Group>
                            <Form.Label>CompanyName:</Form.Label>
                            <Form.Control type="name" name="companyName" value={values.companyName} onChange={handleChange} placeholder='Enter your CompanyName' />
                            <ErrorMessage name="companyName" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-1'>Phone Number : </Form.Label>
                            <Form.Control type="text" name="phoneNumber" value={values.phoneNumber} onChange={handleChange} placeholder='Enter your PhoneNumber' />
                            <ErrorMessage name="phoneNumber" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                        </Form.Group>
                        <Form.Group className='mt-1'>
                            <Form.Label>Address:</Form.Label>
                            <Form.Control type="location" name="address" value={values.address} onChange={handleChange} placeholder='Enter your address' />
                            <ErrorMessage name="address" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='mt-3'>Pan Number : </Form.Label>
                            <Form.Control type="text" name="panNumber" value={values.panNumber} onChange={handleChange} placeholder='Enter your PanNumber' />
                            <ErrorMessage name="pan" component="div" className="error mt-2 text-danger d-flex justify-content-end" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className='mt-3'>Established Date:</Form.Label>
                            <Form.Control type="date" name="establishedDate" value={values.establishedDate} onChange={handleChange} placeholder='Enter your established-date' />
                        </Form.Group>

                        <Button type="submit" className="mt-3 w-100" variant='primary' disabled={isSubmitting}>Continue</Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};
