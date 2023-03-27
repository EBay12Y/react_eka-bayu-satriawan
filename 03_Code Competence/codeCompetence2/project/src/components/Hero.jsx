import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-primary font-bold p-2'>Transform Your Business with Cutting-Edge Solutions</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow your company.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl mt-3 font-bold'>Fast, flexible website with</p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 mt-3'
                        strings={['REACTJS', 'Tailwind', 'SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
                <p className='md:text-2xl font-bold text-gray-500 pt-5 px-3'> Our innovative technology and expert team will help you streamline operations, reduce costs, and achieve your goals.</p>
                <button className='bg-primary w-[200px] rounded-md font-medium mt-12 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero