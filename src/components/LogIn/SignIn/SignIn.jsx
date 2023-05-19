import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
  const {signIn} = useContext(AuthContext);
  const [show,setShow] = useState();

    const handleSignIn = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email,password)
      .then(result =>{
        const user = result.user;
        form.reset();
        toast("Log in successfully")
      })
      .then(error => {
        console.log(error);
      })
    }

    const handleShowPass = event =>{
        setShow(event.target.checked)
    }
    return (
        <div style={{backgroundImage:"url('https://e0.pxfuel.com/wallpapers/667/98/desktop-wallpaper-login-background-outlook-login.jpg')"}} className="hero min-h-screen bg-transparent">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
            <form onSubmit={handleSignIn}>
            <div className="card-body">
                <label className='label'>
                <h1 className="text-5xl font-bold">Login now</h1>
                </label>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Enter email" className="input input-bordered bg-transparent" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
            
                    <input type={show ? "text" : "password"} name='password' placeholder="Enter password" className="input input-bordered bg-transparent" required/>

                <label className="label">
                    <p>
                  <input onClick={handleShowPass} type="checkbox" name="show-password" id="" /> <span className="label-text my-auto">Show password</span>
                    </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <div className="toast toast-top toast-end">
                  <div>
                    <ToastContainer  className="alert alert-success"></ToastContainer>
                  </div>
                </div>
              </div>
              <p>
                New in Toytopia ? Please <Link to="/signUp" className='font-bold link link-hover'>Sign Up</Link>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;