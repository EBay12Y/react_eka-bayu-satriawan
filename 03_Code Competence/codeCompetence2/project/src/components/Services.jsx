import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Services = () => {
    return (
        <div className='w-full py-[5rem] px-4 bg-white'>
            <div className='flex flex-col items-center justify-center bg-white p-10 mx-32 mb-12'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Our Services</h1>
                <p className='mt-3'>We offer a wide range of services to help your business succeed, including web design, marketing, and consulting. Our team of experts will work with you to develop customized solutions that meet your specific needs and goals. With our help, you can achieve success and take your business to the next level.</p>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$119</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>125 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 1 GB</p>
                    </div>
                    <button className='bg-primary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-black text-primary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                    <p className='text-center text-4xl font-bold'>$199</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>1000 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
                    </div>
                    <button className='bg-primary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Custom User</h2>
                    <p className='text-center text-4xl font-bold'>$299</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Unlimited Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 8 GB</p>
                    </div>
                    <button className='bg-black text-primary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    );
};

export default Services;