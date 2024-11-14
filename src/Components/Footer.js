import React from "react";
import logo from "../image/kodify.png";

import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-scroll";


function Footer() {
  return (
    <div className="w-full h-full" id="footer">
      <footer className="text-white body-font">
        
        <div className="xl:w-[1230px] w-[96%] px-5 sm:py-24 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col z-10 relative">



          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link to="Home" className="flex font-medium items-center md:justify-start justify-center md:mx-0 mx-auto mb-[12px] cursor-pointer">
              <img src={logo} className="w-[100px] select-none" />
            </Link>
            <p className="mt-2 text-sm text-[#ffffff9c] GeologicaFont">
            Badsha Internet Marketing Agency is a full-service digital marketing agency. Attract, Impress, and Convert more leads online and get results with Badsha Agency.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center z-10 ">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="text-[15px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Service
              </h2>
              <nav className="list-none mb-10 text-[#ffffff9c] text-[14px] GeologicaFont">
                <li className=" py-[5px]">
                  <a className="">HTML, CSS, Tailwind, Boostrap</a>
                </li>
                <li className=" py-[5px]">
                  <a className="">JavaScript, React JS</a>
                </li>
                <li className=" py-[5px]">
                  <a className="">Node JS </a>
                </li>
                <li className=" py-[5px]">
                  <a className="">Github </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="text-[15px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Quick Links
              </h2>
              <nav className="list-none mb-10 text-[#ffffff9c] text-[14px] GeologicaFont">
                <li className=" py-[5px]">
                  <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                  aria-current="page"
                >
                  About
                </Link>
                </li>
                <li className=" py-[5px]">
                  <Link
                  to="Service"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                  aria-current="page"
                >
                  Service
                </Link>
                </li>
                <li className=" py-[5px]">
                  <Link
                  to="Team"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                  aria-current="page"
                >
                  Team
                </Link>
                </li>
                <li className=" py-[5px]">
                  <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="cursor-pointer"
                  aria-current="page"
                >
                  Contact
                </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full sm:px-0 px-4">
              <h2 className="text-[15px] font-semibold text-white tracking-[1px] mb-3 GeologicaFont">
                Stay Connected
              </h2>
              <nav className="list-none mb-10 text-[#ffffff9c] text-[14px] GeologicaFont">
                <li className="flex py-[5px] md:justify-start justify-center ">
                <IoLocationSharp className="text-[18px] mr-[5px] md:text-left text-center mt-[3px]" />
                  <a className="">
                    Bangladesh 
                    <br /> Rajshahi, Paba 6210
                  </a>
                </li>
                <li className="flex items-center py-[5px] md:text-left text-center  md:justify-start justify-center">
                <MdEmail className="text-[17px] mr-[6px]" />
                  <a className="">
                  kodify@gmail.com
                  </a>
                </li>
                <li className="flex items-center py-[5px] md:text-left text-center  md:justify-start justify-center">
                <FaPhoneFlip className="text-[15px] mr-[6px]" />
                  <a className="">
                  +880 173 966 3503
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="GeologicaFont">
          <div className="xl:w-[1230px] w-[96%] mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <span className="inline-flex sm:hidden sm:ml-auto mt-[-2px] justify-center sm:justify-start z-10 pb-[10px] text-[15px]">
              <a href="" className="text-white cursor-pointer">
                Terms & Condition
              </a>
              <a href="" className="text-white ml-[10px] cursor-pointer">
                Privacy Policy
              </a>
            </span>

            <p className="text-[#ffffff9c] text-sm text-center sm:text-left">
            © CodeeFly 2024 | All Rights Reserved
            </p>
            <span className="sm:inline-flex hidden sm:ml-auto mt-[-2px] justify-center sm:justify-start z-10">
              <a href="" className="text-white cursor-pointer">
                Terms & Condition
              </a>
              <a href="" className="text-white ml-[45px] cursor-pointer">
                Privacy Policy
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
