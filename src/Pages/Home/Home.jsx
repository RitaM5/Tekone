import React from 'react';
import backgroundImage from '../../../public/undefined.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCheckCircle } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
import 'swiper/css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100%',
        minWidth: '100%',
    };
    return (

        <div className='container mx-auto'>
            <div className='bg-gradient-to-b from-[#cee5f3] via-[#cee5f3] to-[#ffffff] h-[800px] lg:flex items-center px-3'>
                <div className=' space-y-12 w-full lg:order-1 order-2'>
                    <h1 className='text-[20px] text-[#5944E8] font-semibold'>TECHNOLOGY SOLUTIONS</h1>
                    <h2 className=' text-[50px] font-semibold text-[#323f7c]'>
                        Digital Technology IT<br /> Solution Services<br /> Around the World
                    </h2>
                    <p className='text-[20px] font-semibold'>
                        Our process that relies on methods and techniques to taking raw data - mining for insights and years of experience will help you become the industry leader.
                    </p>
                    <div className='py-7'>
                        <button className='bg-[#513DE8] py-3 px-8 rounded-3xl text-white font-semibold'> Start Free Trial</button>

                    </div>
                    <div className=' space-y-3 lg:flex gap-6 items-center'>
                        <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/customer-avatar.png" alt="" srcset="" />

                        <p className='text-[20px] text-[#5944E8] font-semibold'>
                            Trusted By 5000+ Worldwide<br />
                            Brand & Customers
                        </p>
                    </div>
                </div>
                <div className='w-full lg:order-2 order-1 mt-32 lg:mt-0'>
                    <div style={{
                        animationName: 'bounce',
                        animationDuration: '5s',
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite',
                        animationDelay: '1s',
                    }} className=' relative top-72 lg:left-72 hidden lg:block z-10'>
                        <img className='w-36' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/banner-ly5-h5.png" alt="" srcset="" />
                    </div>
                    <img className=' relative bottom-12' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/banner-ly-h5.png" alt="" srcset="" />
                </div>
            </div>
            {/* 2nd section */}
            <div className='lg:my-24 lg:pt-0 mt-96 pt-96'>
                <div className="text-center" data-aos="zoom-out">
                    <div className="py-5">
                        <Swiper
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },

                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                }
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}

                            autoPlay={true}
                            interval={3000}
                            className=''
                        >
                            <SwiperSlide>
                                <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner1.png" className="px-8 w-full" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner2.png" className="px-8 w-full" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner3.png" className="px-8 w-full" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner4.png" className="px-8 w-full" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner5.png" className="px-6" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner6.png" className="px-8 w-full" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner7.png" className="px-8 w-full" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner8.png" className="px-8 w-full" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
            {/* 3rd section */}
            <div className='my-32 grid grid-cols-1 lg:grid-cols-3 gap-8 px-2'>
                <div className='w-full bg-base-100 shadow-xl text-center relative  transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420">
                        <path className='w-full' fill="#6EC1E4" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,224C384,245,480,203,576,170.7C672,139,768,117,864,117.3C960,117,1056,139,1152,176C1248,213,1344,267,1392,293.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <div className=' space-y-5 px-3 py-5 '>
                        <img className='w-36  mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/dart-icon.png" alt="" srcset="" />
                        <h1 className='text-5xl  text-[#323f7c] font-semibold'>Cyber Security</h1>
                        <p className='text-[20px] lg:w-80 mx-auto'>
                            We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data.
                        </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className=' relative top-5' viewBox="0 0 1440 320"><path fill="#6EC1E4" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,224C384,245,480,203,576,170.7C672,139,768,117,864,117.3C960,117,1056,139,1152,176C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className='w-full bg-base-100 shadow-xl text-center relative transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420">
                        <path className='w-full' fill="#6EC1E4" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,224C384,245,480,203,576,170.7C672,139,768,117,864,117.3C960,117,1056,139,1152,176C1248,213,1344,267,1392,293.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <div className=' space-y-5 px-3 py-5 '>
                        <img className='w-36  mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/globe-icon.png" alt="" srcset="" />
                        <h1 className='text-5xl  text-[#323f7c] font-semibold'>Cloud Services</h1>
                        <p className='text-[20px] lg:w-80 mx-auto'>
                            We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data.
                        </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className=' relative top-5' viewBox="0 0 1440 320"><path fill="#6EC1E4" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,224C384,245,480,203,576,170.7C672,139,768,117,864,117.3C960,117,1056,139,1152,176C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className='w-full bg-base-100 shadow-xl text-center relative transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420">
                        <path className='w-full' fill="#6EC1E4" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,224C384,245,480,203,576,170.7C672,139,768,117,864,117.3C960,117,1056,139,1152,176C1248,213,1344,267,1392,293.3L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <div className=' space-y-5 px-3 py-5 '>
                        <img className='w-32  mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/search-icon.png" alt="" srcset="" />
                        <h1 className='text-5xl  text-[#323f7c] font-semibold'>Data Analytics</h1>
                        <p className='text-[20px] lg:w-80 mx-auto'>
                            We denounce with righteous indignation and dislike men who are so beguiled and demo ralized your data.
                        </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6EC1E4" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,224C384,245,480,203,576,170.7C672,139,768,117,864,117.3C960,117,1056,139,1152,176C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
            </div>
            {/* 4th section */}
            <div className='bg-[#cee5f3] lg:flex items-center pt-24'>
                <div className='inline-flex items-center w-full'>
                    <img className='pt-12 h-full' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/about-main-img-h5.png" alt="" srcset="" />
                    <div className=' relative right-96'>
                        <img style={{
                            animationName: 'bounce',
                            animationDuration: '3s',
                            animationTimingFunction: 'ease-in-out',
                            animationIterationCount: 'infinite',
                            animationDelay: '1s',
                        }} className=' relative  right-40 w-36'
                            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/about-drone-img-h5.png" alt="" srcset="" />
                    </div>
                </div>
                <div className='w-full space-y-4 p-2'>
                    <h1 className='text-[20px] text-[#5944E8] font-semibold'>ABOUT US</h1>
                    <h2 className=' text-[40px] font-semibold text-[#323f7c]'>
                        We Are Increasing Business<br />Success With Technology
                    </h2>
                    <p className='text-[20px] font-semibold'>
                        Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber. Fully customizable templates. Build relationships that lead to conversions.
                    </p>
                    <div className='pt-4 py-8'>
                        <h1 className='text-[20px] font-semibold underline underline-offset-4'>Top Features</h1>
                        <div className='text-[20px] grid grid-cols-1 md:grid-cols-2 gap-8 my-12'>
                            <p className=' inline-flex gap-5 items-center'>
                                <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                                <span>Drag & Drop Newsletter Editor</span>
                            </p>
                            <p className=' inline-flex gap-5 items-center'>
                                <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                                <span>Content A/B Testing</span>
                            </p>
                            <p className=' inline-flex gap-5 items-center'>
                                <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                                <span>Subject Line A/B Testing</span>
                            </p>
                            <p className=' inline-flex gap-5 items-center'>
                                <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                                <span>List Segmentation</span>
                            </p>
                        </div>
                        <button className='bg-[#513DE8] py-3 px-8 rounded-3xl text-white font-semibold'>Get Started Now</button>
                    </div>

                </div>
            </div>
            {/* 5th secton */}
            <div className='my-16 p-2'>
                <div className='lg:flex justify-between items-center'>
                    <div className='text-left space-y-4'>
                        <h1 className='text-[20px] text-[#5944E8] font-semibold'>WORK FOR ANY INDUSTRY</h1>
                        <h2 className=' text-[40px] font-semibold text-[#323f7c]'>
                            Best Solutions, For All<br />Organizations
                        </h2>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12'>
                        <div className='bg-white shadow-xl rounded-md md:w-[300px] flex items-center h-[300px] relative  transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                            <img className='w-24 mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/atom.png" alt="" srcset="" />
                        </div>
                        <div className='bg-white shadow-xl rounded-md md:w-[300px] flex items-center h-[300px]  relative  transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                            <img className='w-24 mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/dollar-bag.png" alt="" srcset="" />
                        </div>
                        <div className='bg-white shadow-xl rounded-md md:w-[300px] flex items-center h-[300px] relative  transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                            <img className='w-24 mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/medkit.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-24 my-14'>
                    <div className='bg-white shadow-xl rounded-md md:w-[300px] flex items-center h-[300px] relative  transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                        <img className='w-24 mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/diamond.png" alt="" srcset="" />
                    </div>
                    <div className='bg-white shadow-xl rounded-md md:w-[300px] flex items-center h-[300px]  relative  transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                        <img className='w-24 mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/film-reel.png" alt="" srcset="" />
                    </div>
                    <div className='bg-white shadow-xl rounded-md md:w-[300px] flex items-center h-[300px] relative  transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                        <img className='w-24 mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/strategy.png" alt="" srcset="" />
                    </div>
                    <div className='bg-white shadow-xl rounded-md md:w-[300px] flex items-center h-[300px]  relative  transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                        <img className='w-24 mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/target.png" alt="" srcset="" />
                    </div>
                    <div className='bg-white shadow-xl rounded-md md:w-[300px] flex items-center h-[300px] relative  transition ease-in-out  hover:-translate-y-2 duration-300  delay-100'>
                        <img className='w-24 mx-auto' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/idea.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
            {/* 6th secton */}
            <div className='text-center'>
                <div className='inline-flex items-center gap-2'>
                    <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg" alt="" srcset="" />
                    <p className='text-[26px] font-semibold text-[#5944E8]'>
                        What Technology We Are Using For Our Valued Customers
                    </p>
                    <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/heart_beat_graph_dark.svg" alt="" srcset="" />
                </div>
                <Marquee speed={100}>
                    <div className='grid grid-cols-6 items-center gap-6 py-24'>
                        <div className='bg-[#cee5f3] w-full py-4 px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer1.png" alt="" srcset="" />
                        </div>
                        <div className='bg-[#cee5f3] py-4  w-full px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer3.png" alt="" srcset="" />
                        </div>
                        <div className='bg-[#cee5f3] w-full py-4 px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer2.png" alt="" srcset="" />
                        </div>
                        <div className='bg-[#cee5f3] py-4  w-full px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer4.png" alt="" srcset="" />
                        </div>
                        <div className='bg-[#cee5f3] w-full py-4 px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer5.png" alt="" srcset="" />
                        </div>
                        <div className='bg-[#cee5f3] py-4  w-full px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer6.png" alt="" srcset="" />
                        </div>
                    </div>
                </Marquee>
                <Marquee className='relative bottom-24' speed={100} direction='right'>
                    <div className='grid grid-cols-6 items-center gap-6 py-24'>
                        <div className='bg-[#cee5f3] w-full py-4 px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer1.png" alt="" srcset="" />
                        </div>
                        <div className='bg-[#cee5f3] py-4  w-full px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer3.png" alt="" srcset="" />
                        </div>
                        <div className='bg-[#cee5f3] w-full py-4 px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer2.png" alt="" srcset="" />
                        </div>
                        <div className='bg-[#cee5f3] py-4  w-full px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer4.png" alt="" srcset="" />
                        </div>
                        <div className='bg-[#cee5f3] w-full py-4 px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer5.png" alt="" srcset="" />
                        </div>
                        <div className='bg-[#cee5f3] py-4  w-full px-8'>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/logo-layer6.png" alt="" srcset="" />
                        </div>
                    </div>
                </Marquee>
            </div>
            {/* 7th section */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-2'>
                <div className=' space-y-5 w-full'>
                    <h1 className='text-[20px] text-[#5944E8] font-semibold'>OUR SERVICES</h1>
                    <h2 className=' text-[40px] font-semibold text-[#323f7c]'>
                        Explore Our Services<br />That We Offer
                    </h2>
                    <p className='text-[20px] font-semibold'>
                        Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber Fully customizable templates the gioun
                    </p>
                    <div className='py-7'>
                        <button className='bg-[#513DE8] py-3 px-8 rounded-3xl text-white font-semibold'>Vies All Services</button>
                    </div>
                </div>
                <div className='text-[20px] bg-white shadow-xl my-12 relative w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="620 0 640 320"><path fill="#6EC1E4" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,224C384,267,480,277,576,282.7C672,288,768,288,864,245.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <img className='w-16 relative bottom-32 left-8' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/sico-1.png" alt="" srcset="" />
                    <div className='relative bottom-20  grid grid-cols-1 gap-5 p-3'>
                        <h2 className='my-5 text-2xl font-semibold text-[#5944E8]'>Cyber Security</h2>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Drag & Drop Newsletter Editor</span>
                        </p>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Content A/B Testing</span>
                        </p>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Subject Line A/B Testing</span>
                        </p>
                    </div>
                </div>
                <div className='text-[20px] bg-white shadow-xl my-12 relative w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="620 0 640 320"><path fill="#6EC1E4" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,224C384,267,480,277,576,282.7C672,288,768,288,864,245.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <img className='w-16 relative bottom-32 left-8' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/1.png" alt="" srcset="" />
                    <div className='relative bottom-20  grid grid-cols-1 gap-5 p-3'>
                        <h2 className='my-5 text-2xl font-semibold text-[#5944E8]'>Cyber Security</h2>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Drag & Drop Newsletter Editor</span>
                        </p>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Content A/B Testing</span>
                        </p>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Subject Line A/B Testing</span>
                        </p>
                    </div>
                </div>
                <div className='text-[20px] bg-white shadow-xl my-12 relative w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="620 0 640 320"><path fill="#6EC1E4" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,224C384,267,480,277,576,282.7C672,288,768,288,864,245.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <img className='w-16 relative bottom-32 left-8' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/2.png" alt="" srcset="" />
                    <div className='relative bottom-20  grid grid-cols-1 gap-5 p-3'>
                        <h2 className='my-5 text-2xl font-semibold text-[#5944E8]'>Cyber Security</h2>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Drag & Drop Newsletter Editor</span>
                        </p>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Content A/B Testing</span>
                        </p>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Subject Line A/B Testing</span>
                        </p>
                    </div>
                </div>
                <div className='text-[20px] bg-white shadow-xl my-12 relative w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="620 0 640 320"><path fill="#6EC1E4" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,224C384,267,480,277,576,282.7C672,288,768,288,864,245.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <img className='w-16 relative bottom-32 left-8' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/3.png" alt="" srcset="" />
                    <div className='relative bottom-20  grid grid-cols-1 gap-5 p-3'>
                        <h2 className='my-5 text-2xl font-semibold text-[#5944E8]'>Cyber Security</h2>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Drag & Drop Newsletter Editor</span>
                        </p>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Content A/B Testing</span>
                        </p>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Subject Line A/B Testing</span>
                        </p>
                    </div>
                </div>
                <div className='text-[20px] bg-white shadow-xl my-12 relative w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="620 0 640 320"><path fill="#6EC1E4" fill-opacity="1" d="M0,32L48,69.3C96,107,192,181,288,224C384,267,480,277,576,282.7C672,288,768,288,864,245.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <img className='w-16 relative bottom-32 left-8' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/4.png" alt="" srcset="" />
                    <div className='relative bottom-20  grid grid-cols-1 gap-5 p-3'>
                        <h2 className='my-5 text-2xl font-semibold text-[#5944E8]'>Cyber Security</h2>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Drag & Drop Newsletter Editor</span>
                        </p>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Content A/B Testing</span>
                        </p>
                        <p className=' inline-flex gap-5 items-center'>
                            <FaCheckCircle className="" style={{ color: '#323f7c' }} size={30} />
                            <span>Subject Line A/B Testing</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* 8th section */}
            <div className='my-16 p-2'>
                <div className='text-center space-y-4'>
                    <h1 className='text-[20px] text-[#5944E8] font-semibold'>OUR PROJECTS</h1>
                    <h2 className=' text-[40px] font-semibold text-[#323f7c]'>
                        Our Recent Launched Projects<br />Available Into Market
                    </h2>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 my-16'>
                    <div className='card  w-full rounded-md bg-white group'>
                        <figure className='group'>
                            <img className='w-full object-cover group-hover:scale-110 duration-500' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/pr_4-520x640.jpg" alt="" srcset="" />
                        </figure>
                        <div className='transition ease-in-out group-hover:-translate-y-2 duration-300  delay-100 rounded-md shadow-xl space-y-3 bg-white p-6 w-[250px] mx-auto relative bottom-16'>
                            <h2 className="text-gray-600 text-[17px]">Illustration</h2>
                            <p className='text-2xl font-semibold hover:text-[#5944E8]'>Analysis $ Backup Blockchain</p>
                        </div>
                    </div>
                    <div className='card w-full rounded-md bg-white group'>
                        <figure className='group'>
                            <img className='w-full object-cover group-hover:scale-110 duration-500' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/pr_3-520x640.jpg" alt="" srcset="" />
                        </figure>
                        <div className='transition ease-in-out group-hover:-translate-y-2 duration-300  delay-100 rounded-md shadow-xl space-y-3 bg-white p-6 w-[250px] mx-auto relative bottom-16'>
                            <h2 className="text-gray-600 text-[17px]">Illustration</h2>
                            <p className='text-2xl font-semibold hover:text-[#5944E8]'>Analysis $ Backup Blockchain</p>
                        </div>
                    </div>
                    <div className='card w-full rounded-md bg-white group'>
                        <figure className='group'>
                            <img className='w-full object-cover group-hover:scale-110 duration-500' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/pr_2-520x640.jpg" alt="" srcset="" />
                        </figure>
                        <div className='transition ease-in-out group-hover:-translate-y-2 duration-300  delay-100 rounded-md shadow-xl space-y-3 bg-white p-6 w-[250px] mx-auto relative bottom-16'>
                            <h2 className="text-gray-600 text-[17px]">Illustration</h2>
                            <p className='text-2xl font-semibold hover:text-[#5944E8]'>Analysis $ Backup Blockchain</p>
                        </div>
                    </div>
                    <div className='card w-full rounded-md bg-white group'>
                        <figure className='group'>
                            <img className='w-full object-cover group-hover:scale-110 duration-500' src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/pr_1-520x640.jpg" alt="" srcset="" />
                        </figure>
                        <div className='transition ease-in-out group-hover:-translate-y-2 duration-300  delay-100 rounded-md shadow-xl space-y-3 bg-white p-6 w-[250px] mx-auto relative bottom-16'>
                            <h2 className="text-gray-600 text-[17px]">Illustration</h2>
                            <p className='text-2xl font-semibold hover:text-[#5944E8]'>Analysis $ Backup Blockchain</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* 9th section */}
            <div className='p-2 lg:flex items-center justify-between gap-8'>
                <div className='w-full'>
                    <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/testimonial-left5.png" alt="" srcset="" />
                </div>
                <div className='w-full my-16 lg:my-0'>
                    <div className='space-y-4'>
                        <h1 className='text-[20px] text-[#5944E8] font-semibold'>
                            TESTIMONIALS</h1>
                        <h2 className=' text-[40px] font-semibold text-[#323f7c]'>
                            What Customer Saying
                        </h2>
                        <p className='text-[20px] font-semibold'>
                            Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber Fully customizable templates the gioun
                        </p>
                        <Carousel
                            showStatus={false}
                            showThumbs={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={2000}
                            stopOnHover={true}
                            className='py-10'
                            preventMovementUntilSwipeScrollTolerance={true} and swipeScrollTolerance={50}>
                            <div className='text-left space-y-4'>
                                <p className='text-[22px]'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique fuga ducimus iusto nam ad neque dicta molestias quod assumenda, alias nostrum reprehenderit nisi obcaecati rerum aliquam deserunt et itaque quisquam?
                                </p>
                                <div className='inline-flex gap-4 items-center py-3'>
                                    <img className=' rounded-full' style={{ width: '60px', height: "60px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVWqQ3qapOQN56dcYoPH402ULiBOrbDBBlg&usqp=CAU" alt="" srcset="" />
                                    <div className='tezxt-[20px]'>
                                        <h1 className='text-[#5944E8] font-semibold'>Ana Martins</h1>
                                        <span>CEO, Bribble LLC </span>
                                    </div>
                                </div>
                            </div>
                            <div className='text-left space-y-4'>
                                <p className='text-[22px]'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique fuga ducimus iusto nam ad neque dicta molestias quod assumenda, alias nostrum reprehenderit nisi obcaecati rerum aliquam deserunt et itaque quisquam?
                                </p>
                                <div className='inline-flex gap-4 items-center py-3'>
                                    <img className=' rounded-full' style={{ width: '60px', height: "60px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVWqQ3qapOQN56dcYoPH402ULiBOrbDBBlg&usqp=CAU" alt="" srcset="" />
                                    <div className='tezxt-[20px]'>
                                        <h1 className='text-[#5944E8] font-semibold'>Eather Howard</h1>
                                        <span>CEO, Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className='text-left space-y-4'>
                                <p className='text-[22px]'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique fuga ducimus iusto nam ad neque dicta molestias quod assumenda, alias nostrum reprehenderit nisi obcaecati rerum aliquam deserunt et itaque quisquam?
                                </p>
                                <div className='inline-flex gap-4 items-center py-3'>
                                    <img className=' rounded-full' style={{ width: '60px', height: "60px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVWqQ3qapOQN56dcYoPH402ULiBOrbDBBlg&usqp=CAU" alt="" srcset="" />
                                    <div className='tezxt-[20px]'>
                                        <h1 className='text-[#5944E8] font-semibold'>Ana Martins</h1>
                                        <span>CEO, Bribble LLC </span>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            {/* 10th section */}
            <div className='p-2 my-52'>
                <div className=' space-y-4 text-center'>
                    <h1 className='text-[20px] text-[#5944E8] font-semibold'>
                        OUR BLOG</h1>
                    <h2 className=' text-[40px] font-semibold text-[#323f7c]'>
                        Latest Tips &Tricks
                    </h2>
                    <p className='text-[20px] w-1/2 mx-auto font-semibold'>
                        Deliver beautiful emails that get opened and clicked every time. Personalized content to every subscriber Fully customizable templates the gioun
                    </p>
                </div>
                <div className='py-16'>
                    <div className='card rounded-md'>
                        <figure>
                            <img src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/technology-cat-blog.jpg" alt="" srcset="" />
                        </figure>
                        <div className='bg-[#5944E8] flex items-center justify-center absolute left-14 top-8 w-14 h-14 rounded-full'>
                            <p className='bg-white w-6 h-6 rounded-full'></p>
                        </div>
                        <div className=' relative bottom-24 mx-auto space-y-2'>
                            <div className='bg-white shadow-xl rounded-3xl flex items-center gap-3 w-36 py-1 px-4'>
                                <div className='bg-white flex items-center shadow-xl justify-center w-6 h-6 rounded-full'>
                                    <p className=' bg-[#5944E8] w-3 h-3 rounded-full'></p>
                                </div>
                                <p className='text-lg text-[#5944E8]'>Technology</p>
                            </div>
                            <div className='text-2xl font-semibold rounded-2xl w-[350px] text-center p-4 bg-white shadow-xl'>
                                <p className='text-[#323f7c]'>10 Top Machine Learning Platforms In 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;