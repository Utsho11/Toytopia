import React from 'react';
import { Link } from 'react-router-dom';
const MyToyRow = ({ myToy, handleDelete }) => {

    const { _id, picture, price, seller, toy_name, quantity, sub_category, rating, email } = myToy;

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
            <td>
                <Link to={`/updatedToy/${_id}`}><label htmlFor="my-modal-6" className="btn btn-outline btn-xs">update</label></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-xs"><small>Delete</small></button>
            </td>
        </tr>
    );
};

export default MyToyRow;