import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleMouseOver = () => {
        setShowContent(true);
    };

    const handleMouseOut = () => {
        setShowContent(false);
    };

    const handleLogOut = () => {
        logOut()
            .then()
            .then(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-gradient-to-r from-gray-950 to-blue-500 text-white h-32 pr-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/allToys">All Toys</Link></li>
                        {user ? <li><Link to="/myToy">My Toys</Link></li>
                            : ''}
                        {user ? <li><Link to="/addToy">Add Toys</Link></li> : ''}
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <Link to="/">
                    <img src="https://i.ibb.co/QjDVQX3/Screenshot-2023-06-25-134451-removebg-preview.png" className='w-40 rounded-full' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/allToys">All Toys</Link></li>
                    {user ? <li><Link to="/myToy">My Toys</Link></li> :
                        ''}
                    <li><Link to="/addToy">Add Toys</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? 
                 <div className="relative mr-3">
                 <img
                   src={user?.photoURL}
                   alt="Your Image"
                   className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                 />
                 <div className="absolute left-0 right-0 top-0 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                   {/* Content to display on mouseover */}
                   <p className="font-semibold w-40 text-white absolute top-16 rounded">{user?.displayName}</p>
                 </div>
               </div> : ''}
                {user ? <button onClick={handleLogOut} className="btn btn-outline btn-sm">Log out</button> :
                    <button className="btn btn-outline btn-sm text-white"><Link to="/signIn">Sign in</Link></button>}
            </div>
        </div>
    );
};

export default NavigationBar;