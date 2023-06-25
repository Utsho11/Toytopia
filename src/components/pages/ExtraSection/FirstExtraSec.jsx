import React from 'react';
import { FaPlaneDeparture, FaGift, FaPhoneAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FirstExtraSec = () => {
    return (
        <div className='grid text-white lg:grid-cols-3'>
            <div data-aos="fade-right" className="card w-96 bg-base-100 shadow-xl mx-4 my-4">
                <div className="card-body bg-gradient-to-r from-blue-950 to-blue-500">
                    <div className='flex justify-center gap-4'>
                    <FaPlaneDeparture className='text-5xl'></FaPlaneDeparture>
                    <div>
                        <h1 className='text-3xl font-bold'>Free Shipping</h1>
                        <p><small>on orders over $35</small></p>
                    </div>
                    </div>
                </div>
            </div>
            <div  data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl mx-4 my-4">
                <div className="card-body bg-gradient-to-r from-blue-950 to-blue-500">
                    <div className='flex justify-center gap-4'>
                    <FaPhoneAlt className='text-5xl'></FaPhoneAlt>
                    <div>
                        <h1 className='text-3xl font-bold'>Premium Support</h1>
                        <p><small>24/7 including holiday</small></p>
                    </div>
                    </div>
                </div>
            </div>
            <div  data-aos="fade-left" className="card w-96 bg-base-100 shadow-xl mx-4 my-4">
                <div className="card-body bg-gradient-to-r from-blue-950 to-blue-500">
                    <div className='flex justify-center gap-4'>
                    <FaGift className='text-5xl'></FaGift>
                    <div>
                        <h1 className='text-3xl font-bold'>Member Discount</h1>
                        <p><small>up to 30% off</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstExtraSec;