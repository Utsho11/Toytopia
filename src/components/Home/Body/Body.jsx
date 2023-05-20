import React from 'react';
import Category from './Category/Category';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import FirstExtraSec from '../../pages/ExtraSection/FirstExtraSec';

const Body = () => {
    return (
        <div>
            <Banner></Banner>
            <FirstExtraSec></FirstExtraSec>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Body;