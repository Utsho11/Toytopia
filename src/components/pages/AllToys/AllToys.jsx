import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToyCard from './AllToyCard';

const AllToys = () => {
    const toysLoader = useLoaderData();

    if(toysLoader){

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    toysLoader.map(toy => <AllToyCard
                    key={toy._id}
                    toy={toy}></AllToyCard>)
                }
            </div>
        );
    }
};

export default AllToys;