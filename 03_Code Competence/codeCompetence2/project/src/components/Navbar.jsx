import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <>
            <nav className='flex items-center h-24 mx-auto text-white bg-dark sticky top-0 z-50 px-6 md:px-16'>
                <h1 className='w-full text-3xl font-bold text-primary'>EBayProject</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>Works</li>
                    <li className='p-4'>Contact</li>
                    <li className='p-4'>Services</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Clients</li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] h-[100%] border-r border-r-gray-800 bg-[#1b2a41] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
                    <h1 className='w-full text-3xl font-bold text-primary m-4 pt-4'>EBayProject</h1>
                    <ul className='pt-12 uppercase p-4'>
                        <li className='p-4 border-b border-gray-500'>Home</li>
                        <li className='p-4 border-b border-gray-500'>Works</li>
                        <li className='p-4 border-b border-gray-500'>Contact</li>
                        <li className='p-4 border-b border-gray-500'>Services</li>
                        <li className='p-4 border-b border-gray-500'>About</li>
                        <li className='p-4'>Clients</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar