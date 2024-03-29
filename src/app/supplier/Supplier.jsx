import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { api } from "../setup/api";

export const Supplier = ({ userId }) => {
    const [baseImage, setBaseImage] = useState('');
    const [form, setForm] = useState({
        category: '',
        userId: userId,
        supplierInfo: {
            companyName: '',
            phoneNumber: '',
            address: '',
            panNumber: '',
        },
        imgPaths: [''],
        services: [
            {
                service: '',
                price: '',
            },
            {
                service: '',
                price: '',
            }
        ]
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        try {
            const converter = await convertToBase64(file);
            setBaseImage(converter);
            // Update the imgPaths state
            setForm(prevState => ({
                ...prevState,
                imgPaths: [converter]
            }));
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        // try {
        //     const formData = {
        //         ...form,
        //         userId: userId
        //     };
        //     const res = await api.post('/supplierInformation', formData);
        //     console.log("Form submitted successfully:", res.data);
        // } catch (error) {
        //     console.error("Error submitting form:", error);
        // }
    };

    return (
        <>
            <h1>Supplier</h1>
            <Link to='/supplier/sign-up'>Login</Link>
            <Link to='/supplier/registration'>Create Account</Link>
            <form onSubmit={handleFormSubmit}>
                <label>Category:</label>
                <input
                    type="text"
                    name="category"
                    value={form.category}
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                />
                <label>CompanyName:</label>
                <input
                    type="text"
                    name="supplierInfo.companyName"
                    value={form.supplierInfo.companyName}
                    placeholder="Enter your company name"
                    onChange={handleInputChange}
                />
                <label>PhoneNumber:</label>
                <input
                    type="text"
                    name="supplierInfo.phoneNumber"
                    value={form.supplierInfo.phoneNumber}
                    placeholder="Enter your phoneNumber"
                    onChange={handleInputChange}
                />
                <label>Address:</label>
                <input
                    type="text"
                    name="supplierInfo.address"
                    value={form.supplierInfo.address}
                    placeholder="Enter your address"
                    onChange={handleInputChange}
                />
                <label>Pan Number:</label>
                <input
                    type="text"
                    name="supplierInfo.panNumber"
                    value={form.supplierInfo.panNumber}
                    placeholder="Enter your Pan Number"
                    onChange={handleInputChange}
                />
                <label>Select Image:</label>
                <input
                    type="file"
                    onChange={uploadImage}
                />
                {baseImage && <img src={baseImage} alt="Uploaded" height="200px" />}
                <label>Services 1:</label>
                <input type="text" name="services[0].service" value={form.services[0].service} onChange={handleInputChange} placeholder="Enter your service" />
                <input type="text" name="services[0].price" value={form.services[0].price} onChange={handleInputChange} placeholder="Enter your price" />
                <label>Services 2:</label>
                <input type="text" name="services[1].service" value={form.services[1].service} onChange={handleInputChange} placeholder="Enter your service" />
                <input type="text" name="services[1].price" value={form.services[1].price} onChange={handleInputChange} placeholder="Enter your price" />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

Supplier.propTypes = {
    userId: PropTypes.string.isRequired
};

Supplier.defaultProps = {
    userId: ''
};

export default Supplier;
