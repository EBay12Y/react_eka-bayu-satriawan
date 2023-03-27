import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ContactImage from '../assets/Contact us-amico.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
        validationSchema: yup.object({
            firstName: yup.string().min(3, 'First name must be at least 3 characters').required('Required First Name'),
            lastName: yup.string().min(3, 'Last name must be at least 3 characters').required('Required Last Name'),
            email: yup.string().email('Invalid email address').required('Required'),
            message: yup.string().min(5, 'Message must be at least 5 characters').required('Required message . . .'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='m-5'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2' data-aos='fade-right' data-aos-duration='1000'>
                        Contact Us
                    </h1>
                    <p data-aos='fade-right' data-aos-duration='1250'>Need to get in touch with us? Either fill out the form with your inquiry or find the department you'd like to contact below.</p>
                    <img className='w-[250px] mx-auto my-4' src={ContactImage} alt="" data-aos='fade-up' data-aos-duration='1500' />
                </div>
                <div>
                </div>
                <div className='mx-5'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                            <input
                                className='p-3 flex w-full rounded-md text-black mt-5'
                                type='firstName'
                                placeholder='Enter First Name'
                                name='firstName'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                data-aos='fade-up' data-aos-duration='700'
                            />
                            <input
                                className='p-3 flex w-full rounded-md text-black mt-5 md:ml-3'
                                type='lastName'
                                placeholder='Enter Last Name'
                                name='lastName'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                data-aos='fade-up' data-aos-duration='1000'
                            />
                        </div>
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className='text-red-500 text-sm mt-2'>{formik.errors.firstName}</div>
                        ) : null}
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className='text-red-500 text-sm mt-2'>{formik.errors.lastName}</div>
                        ) : null}
                        <div className='flex flex-col sm:flex-row items-center justify-between w-full mt-5'>
                            <input
                                className='p-3 flex w-full rounded-md text-black'
                                type='email'
                                placeholder='Enter Email'
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                data-aos='fade-up' data-aos-duration='1250'
                            />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-red-500 text-sm mt-2'>{formik.errors.email}</div>
                        ) : null}
                        <div className='flex flex-col sm:flex-row items-center justify-between w-full mt-5'>
                            <textarea
                                className='p-3 flex w-full rounded-md text-black'
                                type='message'
                                placeholder='Enter Message . . .'
                                name='message'
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                data-aos='fade-up' data-aos-duration='1500'
                            />
                        </div>
                        {formik.touched.message && formik.errors.message ? (
                            <div className='text-red-500 text-sm mt-2'>{formik.errors.message}</div>
                        ) : null}
                        <button className='bg-primary text-black rounded-md font-medium w-[200px] my-6 px-6 py-3'
                            data-aos='fade-up' data-aos-duration='1750'>
                            Submit
                        </button>
                    </form>
                    <p data-aos='fade-up' data-aos-duration='2000'>
                        We care bout the protection of your data. Read our{' '}
                        <span className='text-primary'>Privacy Policy.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;