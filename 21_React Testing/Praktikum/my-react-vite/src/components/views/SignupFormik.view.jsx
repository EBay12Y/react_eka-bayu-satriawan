import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from "../organism";
import { Link } from 'react-router-dom';
import logoBS from "../../assets/img/bootstrap-logo.svg";
import * as Yup from 'yup';

const SignupFormik = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'First name must be at least 3 characters')
                .required('First name is required'),
            lastName: Yup.string()
                .min(3, 'Last name must be at least 3 characters')
                .required('Last name is required'),
            username: Yup.string().required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <Navbar />
            <section className="d-grid justify-content-center">
                <div className="text-center">
                    <img src={logoBS} alt="logo" className='m-4' />
                    <h2 className='mb-5'>Form Registrasi</h2>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName">First Name:</label><br />
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName">Last Name:</label><br />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div>{formik.errors.lastName}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username">Username:</label><br />
                        <input
                            type="text"
                            id="username"
                            name="username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div>{formik.errors.username}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email">Email:</label><br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password">Password:</label><br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword">Confirm Password:</label><br />
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div>{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>
                    <button type="submit" className='btn btn-primary'>Submit</button>
                </form>
                <p className='mt-5'>Sudah punya akun?
                    <Link to="/signupformik">
                        Login
                    </Link>
                </p>
            </section>
        </>
    );

};

export default SignupFormik