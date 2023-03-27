import React, { useEffect } from 'react'
import WorksImage from '../assets/Works-amico.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Works = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[450px] mx-auto my-4' src={WorksImage} alt='/' data-aos='fade-right' data-aos-duration='1500' />
                <div className='flex flex-col justify-center px-5' data-aos='fade-up' data-aos-duration='1500'>
                    <p className='text-primary font-bold '>EBayProject as AGENCY</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Your Company Website</h1>
                    <p>
                        We are committed to creating innovation and excellence in every aspect of our business, so that we can provide the best experience to our customers. With a focus on quality, reliability and good service, we look forward to continuing to grow and develop together with our customers.
                    </p>
                    <button className='bg-black text-primary w-[200px] rounded-md font-medium mt-10 mx-auto md:mx-0 py-3' data-aos='fade-up' data-aos-duration='2000'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Works