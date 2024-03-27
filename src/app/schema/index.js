import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is invalid')
        .email('Invalid email')
        .required('Email is required'),
        
    password: Yup.string()
        .required('Password is required')
        .matches(/\d+/, 'Password must contain numbers')
        .min(3, 'Password must be at least 8 characters'),
    name: Yup.string()
        .required('Name is required')
});


const phoneRegExp = /^[0-9]{4,15}$/;

export const SupplierValidation = Yup.object().shape({
    companyName: Yup.string()
        .required('Company Name is required'),
    phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(3, "Phone number is too short")
        .max(10, "Phone number is too long"),
})
