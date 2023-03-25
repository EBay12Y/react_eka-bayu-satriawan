import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navbar } from '../organism';
import logoBS from "../../assets/img/bootstrap-logo.svg";
import { Link } from 'react-router-dom';

const LoginFormik = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Required"),
        }),
        onSubmit: (values) => {
            // Submit login form data
            console.log(values);
        },
    });
    return (
        <>
            <Navbar />
            <section className="d-grid justify-content-center">
                <div className="text-center">
                    <img src={logoBS} alt="logo" className='m-4' />
                    <h2 className='mb-5'>Form Login</h2>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email">Email</label><br />
                        <input
                            id="email"
                            type="email"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password">Password</label><br />
                        <input
                            id="password"
                            type="password"
                            {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <button type="submit">Login</button>
                </form>
                <p className='mt-5'>Belum memiliki akun?
                    <Link to="/signupformik">
                        Daftar disini
                    </Link>
                </p>
            </section>
        </>
    )
}

export default LoginFormik