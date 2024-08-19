import React from 'react';

const Awesome = ({img, heading, description}) => {
    return (
        <div className='w-72 mx-8 text-left space-y-3 p-4'>
            <img src={img} alt="" />
            <h2 className='text-2xl font-semibold'> {heading} </h2>
            <p> {description} </p>
        </div>
    );
};

export default Awesome;