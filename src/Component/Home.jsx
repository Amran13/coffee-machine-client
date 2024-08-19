import React from 'react';
import bg from '../assets/more/3.png'
import Awesome from '../Component/Awesome';
import img1 from '../assets/icons/1.png'
import img2 from '../assets/icons/2.png'
import img3 from '../assets/icons/3.png'
import img4 from '../assets/icons/4.png'
import AllCoffees from './AllCoffees';
import coffee1 from '../assets/cups/Rectangle 9.png'
import coffee2 from '../assets/cups/Rectangle 10.png'
import coffee3 from '../assets/cups/Rectangle 11.png'
import coffee4 from '../assets/cups/Rectangle 12.png'
import coffee5 from '../assets/cups/Rectangle 13.png'
import coffee6 from '../assets/cups/Rectangle 14.png'
import coffee7 from '../assets/cups/Rectangle 15.png'
import coffee8 from '../assets/cups/Rectangle 16.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bg})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.niti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
            <div className=' bg-[#ECEAE3] py-20'>
                <div className='flex  max-w-[1280px] mx-auto'>
                    <Awesome img={img1} heading={'hello world'} description={'lorem ipsum'}></Awesome>
                    <Awesome img={img2} heading={'hello world'} description={'lorem ipsum'}></Awesome>
                    <Awesome img={img3} heading={'hello world'} description={'lorem ipsum'}></Awesome>
                    <Awesome img={img4} heading={'hello world'} description={'lorem ipsum'}></Awesome>
                </div>
            </div>
            <div className='max-w-[1280px] mx-auto space-y-6 my-12'>
                <h2 className='text-3xl font-semibold text-center'>Our Popular Products</h2>
                <Link to="/add-coffees">
                    <button className='btn btn-primary'>Add Coffee</button>
                </Link>
                <AllCoffees ></AllCoffees>
            </div>
            <div className='max-w-[1280px] mx-auto'>
                <h2 className='text-3xl font-semibold text-center'>Follow Us On Instagram</h2>
                <div className='grid lg:grid-cols-4 gap-4'>
                    <img src={coffee1} alt="" />
                    <img src={coffee2} alt="" />
                    <img src={coffee3} alt="" />
                    <img src={coffee4} alt="" />
                    <img src={coffee5} alt="" />
                    <img src={coffee6} alt="" />
                    <img src={coffee7} alt="" />
                    <img src={coffee8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;