import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const { createUser } = useContext(AuthContext)
  const [show, setShow] = useState();


  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const from = location.state?.from?.pathname || '/';

    console.log(email, name, password);
    createUser(email, password,name,photo)
      .then(result => {
        const user = result.user;
        form.reset();
        console.log(user);
        toast("Sign up successfully");
        navigate(from,{replace: true})
      })
      .catch(error => {
        console.log(error);
      })


  }

  const handleShowPass = event => {
    setShow(event.target.checked)
  }
  return (
    <div className="hero min-h-screen bg-transparent text-white">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent">
          <form  onSubmit={handleSignUp}>
            <div className="card-body w-full">
              <label className='label'>
                <h1 className="text-5xl font-bold">Register now</h1>
              </label>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input type="text" name='name' placeholder="Enter name" className="input input-bordered bg-transparent border-gray-50" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter email" className="input input-bordered bg-transparent border-gray-50" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input type="text" name='photo' placeholder="Enter Photo URL" className="input input-bordered bg-transparent border-gray-50" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type={show ? "text" : "password"} name='password' placeholder="Enter password" className="input input-bordered bg-transparent border-gray-50" required />
                <label className="label">
                  <p>
                    <input onClick={handleShowPass} type="checkbox" name="show-password" id="" /> <span className="label-text my-auto text-white border-gray-50">Show password</span>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Register" className="btn btn-primary" />
                <div className="toast toast-top toast-end">
                  <div>
                    <ToastContainer  className="alert alert-success"></ToastContainer>
                  </div>
                </div>
              </div>
              <p>
                Already have an account ? Please <Link to="/signIn" className='font-bold link link-hover'>Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;