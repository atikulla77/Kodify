import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navber from "./Navber";
import profilePhoto from "../image/web-photo.png";

// partical
import protfoliodesignHi from "../image/protfolio-design-Hi.png";

import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

import { Link } from "react-scroll";

function Home() {
  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Freelancer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });
  return (
    <div className="w-full h-full relative" name="Home">
      <Navber />
      <div className="xl:w-[1230px] w-[96%] [@media(min-width:920px)]:h-[100vh] h-full flex [@media(min-width:920px)]:flex-row flex-col justify-between items-center mx-auto pt-[75px] relative">
        {/* (partical) */}
        {/* <div className="absolute left-0 top-[100px] z-0 select-none w-[320px] h-[320px] flex overflow-hidden rounded-[50%]">
          <img
            src={dot_partical}
            className="w-[100%] h-[100%] select-none"
          />
        </div> */}


        <div
          className="[@media(min-width:768px)]:w-[60%] w-[90%] h-[100%] flex [@media(min-width:920px)]:hidden justify-center items-center z-10 overflow-hidden mx-auto"
          data-aos="zoom-out"
        >
          <img src={profilePhoto} className="" />
        </div>
        <div
          className="[@media(min-width:920px)]:w-[60%] [@media(min-width:768px)]:w-[90%] w-[100%] z-10 GeologicaFont text-white relative [@media(min-width:920px)]:text-left text-center [@media(min-width:920px)]:pt-0 pt-[35px]"
          data-aos="fade-right"
        >
          <p className="[@media(min-width:530px)]:text-[19px] [@media(min-width:360px)]:text-[18px] text-[16px]">
            Hello,
          </p>

          <h1 className="[@media(min-width:640px)]:text-[65px] [@media(min-width:530px)]:text-[55px] [@media(min-width:360px)]:text-[45px] text-[29px] font-[700] [@media(min-width:920px)]:mx-[] mx-auto text-[#fff] [@media(min-width:1060px)]:leading-[75px] [@media(min-width:640px)]:leading-[65px] [@media(min-width:530px)]:leading-[60px] [@media(min-width:360px)]:leading-[50px] leading-[36px] ml-[-5px] [@media(min-width:640px)]:pb-[11px] pb-[8px]">
            I Am
            <span className="text-[#03bfff] [@media(min-width:640px)]:pl-[10px] pl-[5px]">{text}</span>
            <span className="text-[#03bfff]">
              <Cursor cursorStyle="|" />
            </span>
          </h1>
          <p className="[@media(min-width:1060px)]:w-[589px] [@media(min-width:640px)]:w-[500px] w-[98%] [@media(min-width:1160px)]:text-[16px] [@media(min-width:360px)]:text-[15px] text-[13px] [@media(min-width:920px)]:mx-0 mx-auto [@media(min-width:360px)]:leading-[25px] leading-[20px]">
            I'm a passionate UI/UX designer with a mission to create delightful
            and intuitive digital experiences. With a strong foundation in
            design principles and a keen eye for detail, I specialize in
            translating complex ideas into user-friendly interfaces that
            captivate and engage.
          </p>
          <div className="flex [@media(min-width:920px)]:justify-start justify-center items-center pt-[20px] [@media(min-width:920px)]:mx-0 mx-auto">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              aria-current="page"
              className="[@media(min-width:530px)]:text-[15px] [@media(min-width:360px)]:text-[13px] text-[11px] [@media(min-width:530px)]:px-[28px] [@media(min-width:360px)]:px-[23px] px-[12px] [@media(min-width:530px)]:py-[10px] py-[9px] border-[2px] rounded-[50px] border-[#03BFFF] text-[#03BFFF] social_icon_hover transition-[0.3s] cursor-pointer"
            >
              Get Connected
            </Link>
            <a
              href="https://www.fiverr.com/hapshakhatun"
              target="_blank"
              className="[@media(min-width:530px)]:w-[40px] [@media(min-width:360px)]:w-[38px] w-[35px] [@media(min-width:530px)]:h-[40px] [@media(min-width:360px)]:h-[38px] h-[35px] [@media(min-width:360px)]:ml-[10px] ml-[8px] [@media(min-width:360px)]:mr-[5px] mr-[3px] border-[2px] border-[#03BFFF] text-[#03BFFF] flex justify-center items-center rounded-[50%] cursor-pointer social_icon_hover transition-[0.3s] pl-[1px] pt-[1px]"
            >
              <TbBrandGithub className="[@media(min-width:530px)]:text-[24px] [@media(min-width:360px)]:text-[22px] text-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/[@media(min-width:768px)]-moharom-5bab5b161/"
              target="_blank"
              className="[@media(min-width:530px)]:w-[40px] [@media(min-width:360px)]:w-[38px] w-[35px] [@media(min-width:530px)]:h-[40px] [@media(min-width:360px)]:h-[38px] h-[35px] [@media(min-width:360px)]:mx-[5px] mx-[3px] border-[2px] border-[#03BFFF] text-[#03BFFF] flex justify-center items-center rounded-[50%] cursor-pointer social_icon_hover transition-[0.3s]"
            >
              <FiLinkedin className="[@media(min-width:530px)]:text-[19px] [@media(min-width:360px)]:text-[17px] text-[15px]" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0125a8b16776daf98f"
              target="_blank"
              className="[@media(min-width:530px)]:w-[40px] [@media(min-width:360px)]:w-[38px] w-[35px] [@media(min-width:530px)]:h-[40px] [@media(min-width:360px)]:h-[38px] h-[35px] [@media(min-width:360px)]:mx-[5px] mx-[3px] border-[2px] border-[#03BFFF] text-[#03BFFF] flex justify-center items-center rounded-[50%] cursor-pointer social_icon_hover transition-[0.3s]"
            >
              <FaInstagram className="[@media(min-width:530px)]:text-[21px] [@media(min-width:360px)]:text-[19px] text-[17px]" />
            </a>
            <a
              href="https://www.facebook.com/moharom.badsha"
              target="_blank"
              className="[@media(min-width:530px)]:w-[40px] [@media(min-width:360px)]:w-[38px] w-[35px] [@media(min-width:530px)]:h-[40px] [@media(min-width:360px)]:h-[38px] h-[35px] [@media(min-width:360px)]:ml-[5px] ml-[3px] border-[2px] border-[#03BFFF] text-[#03BFFF] flex justify-center items-center rounded-[50%] cursor-pointer social_icon_hover transition-[0.3s]"
            >
              <FiFacebook className="[@media(min-width:530px)]:text-[20px] [@media(min-width:360px)]:text-[18px] text-[16px] [@media(min-width:530px)]:ml-[-2px] ml-[-1px]" />
            </a>
          </div>
        </div>
        <div
          className="w-[40%] h-[100%] [@media(min-width:920px)]:flex hidden justify-center items-center z-10 overflow-hidden"
          data-aos="fade-down"
        >
          <img src={profilePhoto} className="" />
        </div>
        <div
          className="absolute right-[38%] top-[26%] z-0 select-none w-[310px] [@media(min-width:920px)]:flex hidden"
          data-aos="zoom-in"
        >
          <img
            src={protfoliodesignHi}
            className="w-[100%] h-[100%] select-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
