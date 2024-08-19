import React from 'react';
import { Link } from 'react-router-dom';
import bgOfNavbar from '../assets/more/44.png.png'
import logo from '../assets/more/45.png'
const Navbar = () => {

    return (
        <div className=" bg-base-100" style={{
            backgroundImage: `url(${bgOfNavbar})`
        }}>

            <div className="flex justify-center">
                <a className="btn btn-ghost w-72">
                    <img src={logo} alt="logo" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;