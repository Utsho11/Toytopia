import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllToyCard = ({ toy }) => {
    const { _id, toy_name, seller, price, picture, quantity, sub_category } = toy;

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    return (
        <div>
            <div data-aos="fade-up" className="card w-96 bg-transparent text-white shadow-xl">
                <figure className="px-10 pt-10">
                    <img style={{ width: '304px', height: '304px' }} src={picture} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title">{toy_name}</h2>
                    <p>Category: {sub_category}</p>
                    <p>Seller: {seller}</p>
                    <p>Quantity:{quantity}</p>
                    <p className='text-yellow-400 font-semibold'>Price: ${price}</p>
                    <div className="card-actions">
                        <Link to={`/allToys/${_id}`}>
                            <button className="btn btn-dark btn-outline text-white">View detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToyCard;