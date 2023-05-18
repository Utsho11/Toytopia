import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [show,setShow] = useState();

    const handleShowPass = event =>{
        setShow(event.target.checked)
    }
    return (
        <div style={{backgroundImage:"url('https://e0.pxfuel.com/wallpapers/667/98/desktop-wallpaper-login-background-outlook-login.jpg')"}} className="hero min-h-screen bg-transparent">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
            <div className="card-body">
                <label className='label'>
                <h1 className="text-5xl font-bold">Register now</h1>
                </label>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Enter name" className="input input-bordered bg-transparent" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="Enter email" className="input input-bordered bg-transparent" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Enter Photo URL" className="input input-bordered bg-transparent" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {
                    show ?
                    <input type="text" placeholder="Enter password" className="input input-bordered bg-transparent" />
                    : <input type="password" placeholder="Enter password" className="input input-bordered bg-transparent" />
                }
                <label className="label">
                    <p>
                  <input onClick={handleShowPass} type="checkbox" name="show-password" id="" /> <span className="label-text my-auto">Show password</span>
                    </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">register</button>
              </div>
              <p>
                Already have an account ? Please <Link to="/signIn" className='font-bold link link-hover'>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;