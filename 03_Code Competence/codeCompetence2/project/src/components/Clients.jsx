import React, { useEffect } from 'react'
import Partner from '../assets/partner.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clients = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='flex flex-col items-center justify-center bg-white py-16 px-10'>
            <h1 className="text-3xl font-bold mb-8"
                data-aos='fade-up'
                data-aos-duration='750'
            >Clients Who Trust Us</h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-prose mb-5"
                data-aos='fade-up' data-aos-duration='1000'>
                EBayProject, the leading global digital marketing agency in Asia,
                has a clientele that has trusted us with their digital marketing campaigns.
            </p>
            <img src={Partner} alt="About Us" className="rounded-lg shadow-lg my-4"
                data-aos='fade-up' data-aos-duration='1250' />
        </div>
    )
}

export default Clients