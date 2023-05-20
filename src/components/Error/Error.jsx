import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center relative'>
            <Link to="/"><button className='absolute top-5 btn btn-outline btn-xs'>Back to home</button></Link>
            <img src="https://i.ibb.co/dKrktx7/error-text-broken-glass-font.jpg" alt="" />
        </div>
    );
};

export default Error;