import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const UpdatedToy = () => {

    

    const toy = useLoaderData();
    const {_id,picture,toy_name,seller,price,quantity,sub_category,email,rating} = toy;

    const handleUpdatedToy = event =>{
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
        const updatedToy = {
            picture, price, seller, toy_name, quantity, sub_category, description, rating,email
        }
        console.log(updatedToy);
        fetch(`https://toy-shop-server-eight.vercel.app/allToys/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast("Update toy information successfully")
                form.reset();
            }
        })
    }

    return (
       <div>
        <h1 className='text-white text-5xl text-center font-bold my-4 first-letter: first-letter:'>Update Information</h1>
         <form onSubmit={handleUpdatedToy}>
            <div className='grid lg:grid-cols-2 mx-auto'>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Seller</span>
                    <input type="text" defaultValue={seller} placeholder="name" name='seller' className="input input-bordered input-md" />
                </label>
            </div>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Seller Email</span>
                    <input type="email" defaultValue={email} placeholder="email" name='email' className="input input-bordered input-md" />
                </label>
            </div>
            </div>
            <div className='grid lg:grid-cols-2 mx-auto'>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Toy Name</span>
                    <input type="text" defaultValue={toy_name} placeholder="Toy Name" name='toyName' className="input input-bordered input-md" />
                </label>
            </div>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Photo URL</span>
                    <input type="text" defaultValue={picture} placeholder="Photo URL" name='photo' className="input input-bordered input-md" />
                </label>
            </div>
            </div>
            <div className='grid lg:grid-cols-2 mx-auto'>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Price</span>
                    <input type="text" defaultValue={price} placeholder="Price" name='price' className="input input-bordered input-md" />
                </label>
            </div>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Rating</span>
                    <input type="text" defaultValue={rating} placeholder="Rating" name='rating' className="input input-bordered input-md" />
                </label>
            </div>
            </div>
            <div className='grid lg:grid-cols-2 mx-auto'>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Quantity</span>
                    <input type="text" defaultValue={quantity} placeholder="Quantity" name='quantity' className="input input-bordered input-md" />
                </label>
            </div>
            <div className="form-control my-4 mx-auto">
                <label className="input-group input-group-md">
                    <span>Sub-Category</span>
                    <input type="text" defaultValue={sub_category} placeholder="Sub-Category" name='category' className="input input-bordered input-md" />
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

export default UpdatedToy;