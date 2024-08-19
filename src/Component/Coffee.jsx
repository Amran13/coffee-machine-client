import React from 'react';
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Coffee = ({ coffee, handleDelete }) => {
    return (
        <div className="flex justify-center bg-base-100 rounded-lg p-4 m-4 shadow-xl">
            <div>
                <figure>
                    <img className='w-36'
                        src={coffee.photo}
                        alt="Shoes" />
                </figure>
            </div>
            <div className="card-body text-center">
                <h2> {coffee.name} </h2>
                <p>  {coffee.details} </p>
                <p> Price : {coffee.price} </p>
            </div>
            <div className='flex flex-col space-y-2'>
                <button className="btn text-white hover:text-black bg-[#D2B48C]"><FaEye /></button>
                <button className="btn text-white hover:text-black bg-[#3C393B]"> <FaPen /> </button>
                <button onClick={() => handleDelete(coffee._id)} className="btn text-white hover:text-black bg-[#EA4744]"> <MdDelete /> </button>
            </div>
        </div>
    );
};

export default Coffee;