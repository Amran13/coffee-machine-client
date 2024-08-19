import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Coffee from './Coffee';

const AllCoffees = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/coffees') 
            .then(res => res.json())
            .then(data => setCoffees(data))
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coffee => coffee._id !== id)
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <p> Coffee Length :  {coffees.length}  </p>
            <div className='grid md:grid-cols-2'>
                {
                    coffees.map(coffee => <Coffee coffee={coffee} handleDelete={handleDelete}></Coffee>)
                }
            </div>
        </div>
    );
};

export default AllCoffees;