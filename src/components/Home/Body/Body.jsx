import React from 'react';
import Category from './Category/Category';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import FirstExtraSec from '../../pages/ExtraSection/FirstExtraSec';
import Subscribe from '../../pages/ExtraSection/Subscribe';

const Body = () => {
    return (
        <div>
            <Banner></Banner>
            <FirstExtraSec></FirstExtraSec>
            <Gallery></Gallery>
            <Category></Category>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Body;