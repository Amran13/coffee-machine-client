import React from 'react';
import AllCoffees from './AllCoffees';

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Home Page
            </h1>
            <AllCoffees></AllCoffees>
        </div>
    );
};

export default Home;