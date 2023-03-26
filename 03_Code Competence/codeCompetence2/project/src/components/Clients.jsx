import React from 'react'
import Partner from '../assets/partner.png'

const Clients = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white py-16 px-4'>
            <h1 className="text-3xl font-bold mb-4">Clients Who Trust Us</h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-prose mb-5">
                EBayProject, the leading global digital marketing agency in Asia,
                has a clientele that has trusted us with their digital marketing campaigns.
            </p>
            <img src={Partner} alt="About Us" className="rounded-lg shadow-lg my-4" />
        </div>
    )
}

export default Clients