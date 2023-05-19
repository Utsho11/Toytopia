import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({toy}) => {
    const {_id,toy_name,price,picture,rating}=toy;
    console.log(_id);
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img style={{width: '304px',height: '304px'}} src={picture} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{toy_name}</h2>
                            <p>Price: ${price}</p>
                            <p>Ratings: {rating}</p>
                            <div className="card-actions">
                                <Link to={`/allToys/${_id}`}>
                                <button className="btn btn-primary">View detail</button>
                                </Link>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default CategoryCard;