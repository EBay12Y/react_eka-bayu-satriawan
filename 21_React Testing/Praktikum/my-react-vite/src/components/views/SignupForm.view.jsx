import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from "../organism";
import { Link } from 'react-router-dom';
import logoBS from "../../assets/img/bootstrap-logo.svg";

const SignupForm = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            // size: 'S',
            // number: 0,
            email: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // handleNavigate = useCallback(() => {
    //     navigate("/createproduct");
    // });

    return (
        <div>
            <Navbar />
            <section className="d-grid justify-content-center py-5 mb-5">
                <Link to="/">
                    <button type="button" className="btn btn-primary px-4 py-2">
                        Kembali
                    </button>
                </Link>
                <div className="text-center mt-5">
                    <img src={logoBS} alt="logo" />
                    <h1 className="mt-4">Mencoba Formik</h1>
                </div>
                <form onSubmit={formik.handleSubmit} id="form" className='py-5 mb-5'>
                    <div className="mb-4">
                        <label htmlFor="firstName">First Name</label><br />
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName">Last Name</label><br />
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email">Email Address</label><br />
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email">Password</label><br />
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    );
};

export default SignupForm