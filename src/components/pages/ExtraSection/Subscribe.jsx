import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
    return (
        <div style={{backgroundColor:"#2cd7df"}} className='text-center mx-4 px-8 py-4 rounded-lg text-white my-8'>
            <h1 data-aos="fade-up" className='text-5xl font-semibold'>Sign up for our newsletter</h1>
            <p data-aos="fade-up" className='my-4 text-1xl'>Sign up today for our newsletter and receive <b className='text-red-600'>15% OFF</b> your first purchase, and also get our sneak peeks, tips, and exclusive offers.</p>
            <input data-aos="fade-up" type="email" className='bg-transparent h-14 px-4 border my-4 w-1/2 text-white' placeholder='Enter Your Email Address' /> <br />
            <button data-aos="fade-up" className='btn bg-red-600 text-white'>Subscribe</button>
        </div>
    );
};

export default Subscribe;