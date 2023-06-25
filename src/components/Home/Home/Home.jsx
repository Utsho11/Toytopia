import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {

    return (
        <div className='bg-gradient-to-r from-blue-950 to-blue-500'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;