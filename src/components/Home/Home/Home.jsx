import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {

    return (
        <div style={{backgroundImage: "url('https://e0.pxfuel.com/wallpapers/667/98/desktop-wallpaper-login-background-outlook-login.jpg')"}}>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;