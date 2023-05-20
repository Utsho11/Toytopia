import { Container } from 'postcss';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AddToy = () => {
    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const seller = form.seller.value;
        const email = form.email.value;
        const toy_name = form.toyName.value;
        const picture = form.photo.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const sub_category = form.category.value;
        const description = form.description.value;
        const addedToy = {
            picture, price, seller, toy_name, quantity, sub_category, description, rating,email
        }
        console.log(addedToy);
        fetch('http://localhost:5000/allToys',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(addedToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast("Add toy successfully")
            }
        })
    }
    return (
        <div>
            <h1 className='text-white text-5xl text-center font-bold my-4 first-letter: first-letter:'>ADD A TOY</h1>
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
            <div className="toast toast-top toast-end">
                  <div>
                    <ToastContainer  className="alert alert-success"></ToastContainer>
                  </div>
                </div>
        </form>
        </div>
    );
};

export default AddToy;