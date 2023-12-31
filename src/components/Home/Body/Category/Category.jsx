import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CategoryCard from './CategoryCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
    const [toys, setToys] = useState();
    useEffect(() => {
        fetch('https://toy-shop-server-eight.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    if (toys) {
        const avengersSlicedData = toys.slice(0, 2);
        const starWarSlicedData = toys.slice(5, 7);
        const transformersSlicedData = toys.slice(10, 12);

        return (
            <Tabs data-aos="fade-left" className="text-center text-white mx-4 my-8">
                <div className='flex justify-center'>
                    <TabList className="tabs">
                        <Tab className="tab tab-bordered text-white">Avengers</Tab>
                        <Tab className="tab tab-bordered text-white">Star Wars</Tab>
                        <Tab className="tab tab-bordered text-white">Transformers</Tab>
                    </TabList>
                </div>

                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

                    {
                        avengersSlicedData.map(toy =>
                            <CategoryCard
                                key={toy._id}
                                toy={toy}>
                            </CategoryCard>
                        )
                    }

                </TabPanel>
                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {
                        starWarSlicedData.map(toy =>
                            <CategoryCard
                                key={toy._id}
                                toy={toy}>
                            </CategoryCard>
                        )
                    }
                </TabPanel>
                <TabPanel className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {
                        transformersSlicedData.map(toy =>
                            <CategoryCard
                                key={toy._id}
                                toy={toy}>
                            </CategoryCard>
                        )
                    }
                </TabPanel>
            </Tabs>
        );
    }
};

export default Category;