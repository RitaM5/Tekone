import React from 'react';
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    const divStyle = {
        backgroundImage: `url('https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/footer_4_bg.jpg')`,
        backgroundSize: 'cover',
        minHeight: '100%',
        minWidth: '100%',
    };

    return (
        <div style={divStyle} className='min-h-screen'>
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center p-2'>
                <div className=' space-y-8'>
                    <div className='flex gap-3 items-center'>
                        <img className='w-[250px] pt-20' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/footer_logo.png" alt="" srcset="" />
                    </div>
                    <p className='text-white text-[20px]'>
                        Proactively envisioned multimedia based expertise and cross-media growth strategies seamlessly.
                    </p>
                    <div className='flex gap-3'>
                        <FaFacebook className="icon text-blue-500" size={45} />
                        <FaFacebookMessenger className="icon text-blue-500" size={45} />
                        <FaInstagram className="icon text-blue-500" size={45} />
                        <FaLinkedin className="icon text-blue-500" size={45} />
                    </div>
                </div>
                <div className='pt-24 space-y-4'>
                    <h1 className='text-white text-4xl font-semibold'>Our Services</h1>
                    <p className='flex items-center gap-3'>
                        <img className='text-white' src="https://img.icons8.com/offices/30/long-arrow-right.png" alt="" srcset="" />
                        <span className='text-white text-2xl hover:translate-x-2 hover:text-[#5944E8] duration-200'>IT Management</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <img className='text-white' src="https://img.icons8.com/offices/30/long-arrow-right.png" alt="" srcset="" />
                        <span className='text-white text-2xl hover:translate-x-2 hover:text-[#5944E8] duration-200'>IT Solutions</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <img className='text-white' src="https://img.icons8.com/offices/30/long-arrow-right.png" alt="" srcset="" />
                        <span className='text-white text-2xl hover:translate-x-2 hover:text-[#5944E8] duration-200'>MachineLearning</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <img className='text-white' src="https://img.icons8.com/offices/30/long-arrow-right.png" alt="" srcset="" />
                        <span className='text-white text-2xl hover:translate-x-2 hover:text-[#5944E8] duration-200'>Product Design</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <img className='text-white' src="https://img.icons8.com/offices/30/long-arrow-right.png" alt="" srcset="" />
                        <span className='text-white text-2xl hover:translate-x-2 hover:text-[#5944E8] duration-200'>SEO Optimization</span>
                    </p>
                </div>
                <div className='pt-24 space-y-4'>
                    <h1 className='text-white text-4xl font-semibold'>Information</h1>
                    <p className='flex items-center gap-3'>
                        <img className='text-white' src="https://img.icons8.com/offices/30/long-arrow-right.png" alt="" srcset="" />
                        <span className='text-white text-2xl hover:translate-x-2 hover:text-[#5944E8] duration-200'>IT Management</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <img className='text-white' src="https://img.icons8.com/offices/30/long-arrow-right.png" alt="" srcset="" />
                        <span className='text-white text-2xl hover:translate-x-2 hover:text-[#5944E8] duration-200'>IT Solutions</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <img className='text-white' src="https://img.icons8.com/offices/30/long-arrow-right.png" alt="" srcset="" />
                        <span className='text-white text-2xl hover:translate-x-2 hover:text-[#5944E8] duration-200'>MachineLearning</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <img className='text-white' src="https://img.icons8.com/offices/30/long-arrow-right.png" alt="" srcset="" />
                        <span className='text-white text-2xl hover:translate-x-2 hover:text-[#5944E8] duration-200'>Product Design</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <img className='text-white' src="https://img.icons8.com/offices/30/long-arrow-right.png" alt="" srcset="" />
                        <span className='text-white text-2xl hover:translate-x-2 hover:text-[#5944E8] duration-200'>SEO Optimization</span>
                    </p>
                </div>
                <div className='pt-24 space-y-5'>
                    <h1 className='text-white text-4xl font-semibold'>Newsletter</h1>
                    <p className='text-white text-[20px]'>
                        Register now to get latest updates on promotions & coupons.
                    </p>
                    <input type="text" placeholder="Your Email Address" className="input bg-gray-600 w-full max-w-xs" />
                    <button className='bg-[#5944E8] rounded-md px-6 py-4 flex gap-3 items-center'>
                        <span className='text-white text-lg font-semibold'>Subscribe</span>
                        <img className='text-white' src="https://img.icons8.com/offices/24/long-arrow-right.png" alt="" srcset="" />
                    </button>
                </div>
            </div>
            <div className='p-2 border-b-4 border-white py-8 container mx-auto'></div>
            <div className='container mx-auto p-2 py-14 md:flex md:justify-between justify-center'>
                <p className='text-[20px] text-white'>© 2023 Tekone. Designed By RSTheme.</p>
                <ul className='text-[20px] text-white md:flex gap-8'>
                    <li>Privacy Policy</li>
                    <li className=' list-disc'>Terms of use
                    </li>
                    <li className=' list-disc'>Sitemap</li>
                    <li className=' list-disc'>Carrer</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;