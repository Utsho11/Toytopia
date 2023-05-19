import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import Category from '../Body/Category/Category';

const Home = () => {

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;