import React from 'react';

const CategoryCard = ({toy}) => {
    const {_id,toy_name,price,picture,rating}=toy;
    console.log(toy_name);
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
                                <button className="btn btn-primary">View detail</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default CategoryCard;