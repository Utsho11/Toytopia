import { Container } from 'postcss';
import React from 'react';

const AddToy = () => {
    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const seller = form.seller.value;
        const email = form.email.value;
        const toyName = form.toyName.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const description = form.description.value;
    }
    return (
        <form onSubmit={handleAddToy}>
            <div className='grid lg:grid-cols-2 mx-auto'>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Seller</span>
                    <input type="text" placeholder="name" name='seller' className="input input-bordered input-md" />
                </label>
            </div>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Seller Email</span>
                    <input type="email" placeholder="email" name='email' className="input input-bordered input-md" />
                </label>
            </div>
            </div>
            <div className='grid lg:grid-cols-2 mx-auto'>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Toy Name</span>
                    <input type="text" placeholder="Toy Name" name='toyName' className="input input-bordered input-md" />
                </label>
            </div>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Photo URL</span>
                    <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered input-md" />
                </label>
            </div>
            </div>
            <div className='grid lg:grid-cols-2 mx-auto'>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Price</span>
                    <input type="text" placeholder="Price" name='price' className="input input-bordered input-md" />
                </label>
            </div>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Rating</span>
                    <input type="text" placeholder="Rating" name='rating' className="input input-bordered input-md" />
                </label>
            </div>
            </div>
            <div className='grid lg:grid-cols-2 mx-auto'>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Quantity</span>
                    <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered input-md" />
                </label>
            </div>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Sub-Category</span>
                    <input type="text" placeholder="Sub-Category" name='category' className="input input-bordered input-md" />
                </label>
            </div>
            </div>
            <div className='p-11'>
            <textarea placeholder="Description" name='description' className="textarea textarea-bordered textarea-lg w-full " ></textarea>
            </div>
            <div className='text-center mb-4'>
                <input className='btn btn-outline' type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default AddToy;