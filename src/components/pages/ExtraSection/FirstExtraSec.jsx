import React from 'react';
import { FaPlaneDeparture, FaGift, FaPhoneAlt } from "react-icons/fa";

const FirstExtraSec = () => {
    return (
        <div className='grid lg:grid-cols-3'>
            <div className="card w-96 bg-base-100 shadow-xl mx-4 my-4">
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                    <FaPlaneDeparture style={{color: "#2cd7df"}} className='text-5xl'></FaPlaneDeparture>
                    <div>
                        <h1 className='text-3xl font-bold text-white'>Free Shipping</h1>
                        <p><small>on orders over $35</small></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-4 my-4">
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                    <FaPhoneAlt style={{color: "#2cd7df"}} className='text-5xl'></FaPhoneAlt>
                    <div>
                        <h1 className='text-3xl font-bold text-white'>Premium Support</h1>
                        <p><small>24/7 including holiday</small></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-4 my-4">
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                    <FaGift style={{color: "#2cd7df"}} className='text-5xl'></FaGift>
                    <div>
                        <h1 className='text-3xl font-bold text-white'>Member Discount</h1>
                        <p><small>up to 30% off</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstExtraSec;