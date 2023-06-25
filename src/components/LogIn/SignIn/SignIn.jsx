import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
  const { signIn, logInWithGoogle } = useContext(AuthContext);
  const [show, setShow] = useState();
  const [error, setError] = useState(); 

  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const from = location.state?.from?.pathname || '/';

    setError('')

    signIn(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        console.log(user);
        toast("Log in successfully");
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message);
        console.log(error);
      })
  }

  const handleGoogleSignIn = () => {
    logInWithGoogle(googleProvider)
      .then(result => {
        const user = result.user;
        toast("Log in successfully");
        navigate(from, { replace: true });
      })
      .then(error => {
        console.log('error', error);
      })

  }

  const handleShowPass = event => {
    setShow(event.target.checked)
  }
  return (
    <div className="hero min-h-screen bg-transparent">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSignIn}>
            <div className="card-body pb-0 text-white">
              <label className='label'>
                <h1 className="text-5xl font-bold">Login now</h1>
              </label>
              <hr />
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-semibold">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter email" className="input input-bordered bg-transparent" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-semibold">Password</span>
                </label>

                <input type={show ? "text" : "password"} name='password' placeholder="Enter password" className="input input-bordered bg-transparent" required />

                <label className="label">
                  <p>
                    <input onClick={handleShowPass} type="checkbox" name="show-password" id="" /> <span className="label-text my-auto text-white font-semibold">Show password</span>
                  </p>
                </label>
              </div>
                  <p><b className='text-red-600'>{error}</b></p>
              <div className="form-control mt-6">
                <button className="btn btn-primary my-3">Login</button>
                <div className="toast toast-top toast-end">
                  <div>
                    <ToastContainer className="alert alert-success"></ToastContainer>
                  </div>
                </div>
              </div>
              <p>
                New in Toytopia ? Please <Link to="/signUp" className='font-bold link link-hover'>Sign Up</Link>
              </p>
              <hr />
              <p className='text-center'>or <br /> Login with</p>
            </div>
          </form>
          <div className='text-center my-3'>
            <button onClick={handleGoogleSignIn} className='btn btn-primary btn-sm'>Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;