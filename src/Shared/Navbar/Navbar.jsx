import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { BiBell } from 'react-icons/bi';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };
  return (
    <div>
      <div className={navbar ? "fixed z-50 w-full font-poppins bg-white" : "fixed z-50 w-full bg-[#cee5f3] font-poppins"}>
        <nav className="relative lg:right-8 text-black">
          <div className="flex font-poppins items-center font-medium justify-around h-20 ">
            <div className="z-50 p-5 md:w-auto w-full flex justify-between">
              <Link to="/">
                <img className="md:w-44 w-36" src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/tekone_logo_home.png" alt="" srcset="" />
              </Link>
              <div className="relative block lg:hidden pt-2">
                  <button type="button" onClick={toggleSearch}>
                    <i className="fa-solid fa-search w-20"></i>
                  </button>

                  {searchVisible && (
                    <div className="absolute top-16 -left-24  bg-white p-2 rounded-md shadow-md">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 p-1 rounded-md"
                      />
                      <button type="button" className="absolute right-8 mt-1" onClick={toggleSearch}>
                        <i className="fa-solid fa-search"></i>
                      </button>
                    </div>
                  )}
                </div>
              {/* <i className="fas fa-search block lg:hidden mt-2" style={{ color: '#298541', fontSize: '22px' }}></i> */}
              <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>
            <ul className="md:flex hidden text-lg relative right-6  items-center gap-8  font-semibold">
              <li className="hover:bg-gray-300 rounded-md"><NavLinks /></li>
              <li className="hover:bg-gray-300 rounded-md">
                <Link to="" className="py-2 px-3 inline-block">
                  About
                </Link>
              </li>
              <li className="hover:bg-gray-300 rounded-md">
                <Link to="" className="py-2 px-3 inline-block">
                  Services<sup> 08</sup>
                </Link>
              </li>
              <li className="hover:bg-gray-300 rounded-md">
                <Link to="" className="py-2 px-3 inline-block">
                  pages<sup> 14</sup>
                </Link>
              </li>
              <li className="hover:bg-gray-300 rounded-md">
                <Link to="" className="py-2 px-3 inline-block ">
                  Blog<sup> 04</sup>
                </Link>
              </li>
            </ul>

            <div className="md:block hidden">
              <ul className="md:flex relative left-8 items-center hidden text-base gap-8 lg:gap-5 font-semibold ">
                {/* <li className="relative right-4">
                  <button type="button"><i className="fa-solid fa-search"></i></button>
                </li> */}
                <li className="relative">
                  <button type="button" onClick={toggleSearch}>
                    <i className="fa-solid fa-search w-20"></i>
                  </button>

                  {searchVisible && (
                    <div className="absolute top-14 left-0 bg-white p-2 rounded-md shadow-md">
                      {/* Search input field */}
                      <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 p-1 rounded-md"
                      />
                      {/* Close button */}
                      <button type="button" className="absolute right-8 mt-1" onClick={toggleSearch}>
                        <i className="fa-solid fa-search"></i>
                      </button>
                    </div>
                  )}
                </li>
                <li>
                  <button className='bg-[#5944E8] rounded-md px-3 py-3 w-fit flex gap-3 items-center'>
                    <span className='text-white text-lg font-semibold'>Get A Quote</span>
                    <img className='text-white' src="https://img.icons8.com/offices/24/long-arrow-right.png" alt="" srcset="" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile nav */}
            <ul
              className={`
        md:hidden bg-[#102f25] text-white fixed w-full h-[400px] z-10 py-12 top-20 overflow-y-auto bottom-0  pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] font-semibold text-lg "}
        `}
            >
              <li><NavLinks /></li>
              <li>
                <Link to="" className="py-3 px-3 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="" className="py-3 px-3 inline-block">
                  Services
                </Link>
              </li>
              <div className="py-3">
                <li>
                  <Link to="" className="py-2 px-3 inline-block  text-white rounded-md">
                    Pages
                  </Link>
                </li>
                <li>
                  <Link to="" className="py-3 px-3 inline-block">
                    Blog
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>

  );
};

export default Navbar;