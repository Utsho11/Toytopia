import React from 'react';

const MyToyRow = ({myToy}) => {

    const {picture, price, seller, toy_name, quantity, sub_category, rating,email} = myToy
    return (

            <tr>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={picture} />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>{seller}</td>
                        <td>{email}</td>
                        <td>{toy_name}</td>
                        <td>{sub_category}</td>
                        <td>${price}</td>
                        <td>{quantity}</td>
                        <td>{rating}</td>
                    </tr>
    );
};

export default MyToyRow;