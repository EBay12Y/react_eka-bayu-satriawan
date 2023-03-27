import React, { useEffect } from 'react';
import AboutImage from '../assets/About us-amico.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="flex flex-col items-center justify-center py-16 text-white px-10">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[300px] mx-auto my-4'
                    src={AboutImage} alt='/'
                    data-aos='fade-right'
                    data-aos-duration='900' />
                <div className='flex flex-col justify-center'
                    data-aos='fade-up'
                    data-aos-duration='1250'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 mb-3'>About Us</h1>
                    <p data-aos='fade-up' data-aos-duration='1500'>
                        At EBayProject, we're passionate about helping businesses succeed. We started our company with a simple mission: to provide innovative solutions that help our clients achieve their goals. With years of experience and a dedicated team of experts, we've become a trusted partner for businesses of all sizes. Whether you're looking to improve your online presence, streamline your operations, or grow your revenue, we're here to help. Contact us today to learn more about how we can help you succeed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
