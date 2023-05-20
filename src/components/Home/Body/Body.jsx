import React from 'react';
import Category from './Category/Category';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Body = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Body;