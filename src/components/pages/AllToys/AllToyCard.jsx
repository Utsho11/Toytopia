import React, { useContext } from 'react';

const AllToyCard = ({toy}) => {
    const {toy_name,seller,price,picture,quantity,sub_category}=toy;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img style={{width: '304px',height: '304px'}} src={picture} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{toy_name}</h2>
                            <p>{sub_category}</p>
                            <p>{seller}</p>
                            <p>{quantity}</p>
                            <p>{price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View detail</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default AllToyCard;