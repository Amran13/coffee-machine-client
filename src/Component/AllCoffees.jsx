import React, { useEffect, useState } from 'react';

const AllCoffees = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/coffees')
            .then(res => res.json())
            .then(data => setCoffees(data))
    }, [])
    return (
        <div>
            <p> Coffee Length :  {coffees.length}  </p>

            <div>
                {
                    coffees.map(coffee => <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src={coffee.photo}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"> {coffee.name} </h2>
                            <p> {coffee.details} </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllCoffees;