import React from 'react';
import bg from '../assets/more/13.jpg'
import logo from  '../assets/more/logo1.png'
const Footer = () => {
    return (
        <div className='flex justify-center'>
            <img className='absolute h-1/2 w-full' src={bg} alt="" />
            <footer className="footer flex justify-between mt-20 z-10 text-base-content p-10">
                <div className='w-1/2'>
                    <img className='w-12' src={logo} alt="" />
                    <h3>Expresso Emporium</h3>
                    <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                </div>
                
                <form className='w-1/2 flex justify-center'>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;