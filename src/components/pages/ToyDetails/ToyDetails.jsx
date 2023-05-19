import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const { picture, price, seller, toy_name, quantity, sub_category, description, rating } = toy;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-4">
            <figure><img src={picture} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-5xl">{toy_name}</h2>
                <p className='text-3xl'><b>Description:</b> <br /> <small>{description}</small></p>
                <p className='text-3xl'><b>Category:</b> {sub_category}</p>
                <p className='text-3xl'><b>Seller:</b> {seller}</p>
                <p className='text-3xl'><b>Quantity:</b> {quantity}</p>
                <p className='text-3xl text-orange-400'><b>Rating:</b> {rating}</p>
                <p className='text-3xl text-red-600'><b>Price:</b> ${price}</p>
                </div>
            </div>
    );
};

export default ToyDetails;