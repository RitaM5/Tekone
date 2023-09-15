import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [submenuVisible, setSubmenuVisible] = useState(false);
  return (
    <>
      {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer relative  group">
            <h1
              className="py-3 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}<sup className="lg:block hidden"> 11</sup>
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${heading === link.name ? "chevron-up" : "chevron-down"
                    }`}
                ></ion-icon>
              </span>
              {/*  */}
            </h1>
            {link.submenu && (
              <div className="group">
                {/* absolute hidden top-[-9999px] group-hover:block group-hover:top-14 duration-700 delay-300*/}
                <div className={`absolute hidden lg:block left-32 top-0 -z-10 transform ${heading === link.name ? 'translate-y-12' : '-translate-y-96'} group-hover:translate-y-16 transition-transform duration-500 delay-300`}>
                  <div className="bg-[#5944E8]  shadow-xl relative right-32 rounded-lg p-5  grid grid-cols-1 w-[300px] gap-10">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        {mysublinks.sublink.map((slink, index) => (
                          <li className={`text-lg text-white my-4 ${index !== mysublinks.sublink.length - 1 ? 'border-b border-white' : ''
                            }`}>
                            <Link
                              to={slink.link}
                              className=""
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                        {/* <li className="text-lg text-white my-4 border-t-2 relative group">
                          <span className="group">notipage</span>
                          <div className={`absolute left-44 -ml-4 top-0 bg-[#5944E8] shadow-xl rounded-lg p-5 w-[300px] gap-10 group-hover:translate-x-32 hidden group-hover:block transition-transform duration-500 delay-300`}>
                            {mysublinks.sublink.map((slink, index) => (
                              <li
                                className={`text-lg text-white my-4 ${index !== mysublinks.sublink.length - 1 ? 'border-b border-white' : ''
                                  }`}
                                key={slink.name}
                              >
                                <Link to={slink.link} className="">
                                  {slink.name}
                                </Link>
                              </li>
                            ))}
                          </div>
                        </li> */}
                        <div className="group">
                          <li
                            className="text-lg text-white my-4 border-t-2 relative group"
                            onMouseEnter={() => setSubmenuVisible(true)}
                            onMouseLeave={() => setSubmenuVisible(false)}
                          >
                            <div className="flex justify-between">
                              <span className="group">Multipage</span>
                              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                <ion-icon name="chevron-down"></ion-icon>
                              </span>
                            </div>
                            <div
                              className={`absolute group-hover:translate-x-80 -ml-4 top-0 bg-[#5944E8] shadow-xl rounded-lg p-5 w-[300px] gap-10 ${submenuVisible ? "block" : "hidden"
                                }`}
                            >
                              {mysublinks.sublink.map((slink, index) => (
                                <li
                                  className={`text-lg text-white my-4 ${index !== mysublinks.sublink.length - 1 ? "border-b border-white" : ""
                                    }`}
                                  key={slink.name}
                                >
                                  <Link to={slink.link} className="">
                                    {slink.name}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          </li>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center "
                  >
                    {/* {slinks.Head} */}
                    Submenu
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${subHeading === slinks.Head
                          ? "chevron-up"
                          : "chevron-down"
                          }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
