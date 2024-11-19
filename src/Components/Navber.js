import { useState } from "react";
import logo from "../image/kodify.png";

import { HiOutlineMenu } from "react-icons/hi";

import { Link } from "react-scroll";

function Navber() {
  //      ``````````````````
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 24) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [nevMobileVButton, setNevMobileVButton] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "Home",
    },
    {
      id: 2,
      name: "About",
      link: "About",
    },
    {
      id: 3,
      name: "Skill",
      link: "Skill",
    },
    {
      id: 4,
      name: "Portfolio",
      link: "Portfolio",
    },
    {
      id: 5,
      name: "Service",
      link: "Service",
    },
    {
      id: 6,
      name: "Contact",
      link: "Contact",
    },
  ]

  return (
    <div className={` w-full flex fixed top-[0px] z-50`}>
      <nav
        className={`text-white w-full relative ${
          color
            ? "bg-[#0a012af0] shadow-[0px_0px_3px_0px_#0003]"
            : "bg-transparent"
        }`}
        style={{ transition: ".1s ease-in" }}
      >
        <div
          className="mx-auto px-2 [@media(min-width:715px)]:px-6 lg:px-[0] xl:w-[1230px] w-[96%]"
          data-aos="fade-down"
        >
          <div className="items-center [@media(min-width:530px)]:h-[5rem] h-[4rem] flex justify-between w-full GeologicaFont">
            <Link to="Home" className="flex items-center z-[2]">
              <img src={logo} className="[@media(min-width:420px)]:w-[100px] w-[80px] select-none cursor-pointer" />
            </Link>

        
            {/* ---------------Web Nav Item--------------- */}
            <div className="[@media(min-width:715px)]:flex hidden items-center justify-center text-white mt-[5px] ">
              <div className="flex sm:space-x-4 space-x-1">
                {navItems.map((key) => {
                  return(
                    <Link
                    key={key.id}
                    to={key.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                    className="sm:px-3 px-[5px] py-2 text-sm font-medium cursor-pointer"
                    aria-current="page"
                  >
                    {key.name}
                  </Link>
                  )
                })}
              </div>
            </div>
            
            {/* ---------------Mobile Nav Button--------------- */}
            <div
              className={`${
                nevMobileVButton ? "hidden" : "flex [@media(min-width:715px)]:hidden"
              } z-[2]`}
              onClick={() => setNevMobileVButton(true)}
            >
              <HiOutlineMenu className="[@media(min-width:420px)]:text-[25px] text-[23px]" />
            </div>
            <div
              className={`${
                nevMobileVButton ? "flex [@media(min-width:715px)]:hidden" : "hidden"
              } z-[2]`}
              onClick={() => setNevMobileVButton(false)}
            >
              <p className="[@media(min-width:420px)]:text-[40px] text-[38px] rotate-[45deg]">+</p>
            </div>
            {/* ---------------Mobile Nav Item--------------- */}
            <div
              className={`absolute top-0 left-0 w-full h-[100vh] bg-[#1e1345ed] z-0 ${
                nevMobileVButton ? "flex [@media(min-width:715px)]:hidden" : "hidden"
              }`}
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
              {navItems.map((key) => {
                  return(
                    <Link
                    key={key.id}
                    to={key.link}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={100}
                    className="sm:px-3 px-[5px] py-2 [@media(min-width:420px)]:text-base text-[14px] font-medium cursor-pointer block"
                    aria-current="page"
                    onClick={() => setNevMobileVButton(false)}
                  >
                    {key.name}
                  </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
