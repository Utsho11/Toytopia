import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    return (
        <div data-aos="fade-right"  className='my-8 mx-4'>
            <h1 className='text-white text-5xl text-center font-bold my-4 first-letter: first-letter:'>GALLERY</h1>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item flex justify-center w-full gap-14">
                    <img style={{ width: "500px", height: "500px" }} src="https://static-01.daraz.com.bd/p/fa397a4e221439143b9d0c91de6ff1ef.jpg" className="w-1/2 rounded-lg" />
                    <img style={{ width: "500px", height: "500px" }} src="https://static-01.daraz.com.bd/p/d7c03ada749b50b8088e21dddb480fb7.jpg" className="w-1/2 rounded-lg" />
                </div>
                <div id="item2" className="carousel-item flex justify-center w-full gap-14">
                    <img style={{ width: "500px", height: "500px" }} src="https://i5.walmartimages.com/asr/00b78dd8-e016-49ee-8156-48529c32a700.c8d47545b37e03936fd60d0eb06f05cf.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF" className="w-1/2 rounded-lg" />
                    <img style={{ width: "500px", height: "500px" }} src="https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/461012708580-5?fmt…" className="w-1/2 rounded-lg" />
                </div>
                <div id="item3" className="carousel-item flex justify-center w-full gap-14">
                    <img style={{ width: "500px", height: "500px" }} src="https://images-na.ssl-images-amazon.com/images/I/810MxkohwsL._AC_UL600_SR600,600_.jpg" className="w-1/2 rounded-lg" />
                    <img style={{ width: "500px", height: "500px" }} src="https://bwtf.com/sites/default/files/toyreview-images/generations/earthrise/starscream/inbox.jpg" className="w-1/2 rounded-lg" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Gallery;