import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])

    return (
        <div className="hero min-h-screen bg-transparent text-white my-4">
            <div className="hero-content grid lg:grid-cols-2 gap-4">
                <div data-aos="fade-right">
                <img src="https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTF1VUd1LUFrZEwuX1NTNDAwXy5qcGc.jpg" className="w-full rounded-lg shadow-2xl" />
                </div>
                <div data-aos="fade-left" className='p-4'>
                    <h1 className="text-7xl font-bold my-12">Grab your toys</h1>
                    <h1 className="text-3xl font-bold my-8">Enjoy a memorable time with TOYTOPIA </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima maxime explicabo, beatae <br /> hic quae, distinctio atque quibusdam optio eos molestias possimus, numquam voluptatum labore enim nemo id sequi dolor! Ad!</p>
                    <Link to="/allToys"><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;