import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .then(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-base-100 h-32">
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
                <img src="https://i.ibb.co/PQZSJNv/flg-logo6387.png" className='w-40' />
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
                {user ? <div className="avatar">
                    <div className="w-14 me-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div> : ''}
                {user ? <button onClick={handleLogOut} className="btn btn-outline">Log out</button> :
                    <button className="btn btn-outline"><Link to="/signIn">Sign in</Link></button>}
            </div>
        </div>
    );
};

export default NavigationBar;