import React from 'react'
import WorksImage from '../assets/Works-amico.svg';

const Works = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[450px] mx-auto my-4' src={WorksImage} alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='text-primary font-bold '>EBayProject as AGENCY</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Your Company Website</h1>
                    <p>
                        We are committed to creating innovation and excellence in every aspect of our business, so that we can provide the best experience to our customers. With a focus on quality, reliability and good service, we look forward to continuing to grow and develop together with our customers.
                    </p>
                    <button className='bg-black text-primary w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Works