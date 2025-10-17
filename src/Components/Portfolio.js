import React, { useState } from "react";

import webDesign1 from "../image/portfolio/1_PixPix_ScreenShot.webp";
import webDesign2 from "../image/portfolio/2_Kitoo_ScreenShot.webp";
import webDesign3 from "../image/portfolio/3_Leadbie_ScreenShot.webp";
import webDesign4 from "../image/portfolio/4_DevDock_ScreenShot.webp";
import webDesign5 from "../image/portfolio/5_WebstreX_ScreenShot.webp";
import webDesign6 from "../image/portfolio/6_SparxDev_ScreenShot.webp";

import fullViewDesign1 from "../image/portfolio/1_PixPix_Full_Web_View.webp";
import fullViewDesign2 from "../image/portfolio/2_Kitoo_Full_Web_View.webp";
import fullViewDesign3 from "../image/portfolio/3_Leadbie_Full_Web_View.webp";
import fullViewDesign4 from "../image/portfolio/4_DevDock_Full_Web_View.webp";
import fullViewDesign5 from "../image/portfolio/5_WebstreX_Full_Web_View.webp";
import fullViewDesign6 from "../image/portfolio/6_SparxDev_Full_Web_View.webp";

import { FaArrowRight } from "react-icons/fa6";

function Portfolio() {
  const [showModal, setShowModal] = useState(false)
  const projectsData = [
    {
      id: 1,
      img: webDesign1,
      name: "PixPix",
      fullView: fullViewDesign1,
      link: "https://pixpix.vercel.app/",
      language: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "React JS" },
        { id: 6, name: "React Router" },
        { id: 7, name: "Node JS" },
      ],
    },
    {
      id: 2,
      img: webDesign2,
      name: "Kitoo",
      fullView: fullViewDesign2,
      link: "https://kitoo-zeta.vercel.app/",
      language: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "React JS" },
        { id: 6, name: "Node JS" },
      ],
    },
    {
      id: 3,
      img: webDesign3,
      name: "LeadBie",
      fullView: fullViewDesign3,
      link: "https://leadbie.vercel.app/",
      language: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "React JS" },
        { id: 6, name: "Node JS" },
      ],
    },
    {
      id: 4,
      img: webDesign4,
      name: "DevDock",
      fullView: fullViewDesign4,
      link: "https://devdockui.vercel.app/",
      language: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "React JS" },
        { id: 6, name: "Node JS" },
      ],
    },
    {
      id: 5,
      img: webDesign5,
      name: "WebstreX",
      fullView: fullViewDesign5,
      link: "https://webstrex.vercel.app/",
      language: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "React JS" },
        { id: 6, name: "Node JS" },
      ],
    },
    {
      id: 6,
      img: webDesign6,
      name: "SparxDev",
      fullView: fullViewDesign6,
      link: "https://sparxdev.vercel.app/",
      language: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "Tailwind" },
        { id: 4, name: "JavaScript" },
        { id: 5, name: "React JS" },
        { id: 6, name: "Node JS" },
      ],
    },
  ];
  return (
    <div>
      <div
        className="w-full h-full relative md:pt-[3.5rem] pt-[3rem] GeologicaFont "
        name="Portfolio"
      >
        <div className="w-full text-center text-white relative z-10 md:pb-[1rem] pb-[10px]">
          <h1 className="md:text-[30px] sm:text-[25px] text-[20px] font-bold">
            Portfolio
          </h1>
          <p className="text-[#03bfff] sm:text-[14px] text-[13px] mx-auto">
            Showcasing some of my recent work
          </p>
        </div>
        <div className="xl:!w-[1230px] [@media(min-width:430px)]:w-[96%] w-[100%] mx-auto [@media(min-width:430px)]:px-5 px-0 flex justify-center items-center">
          <div className="flex flex-wrap justify-around w-full h-full pt-[25px] relative">
            {projectsData.map((catagory) => (
              <div key={catagory.id} className="">
                <label
                  htmlFor={`my_modal_${catagory.id}`}
                  data-aos="fade-up"
                  onClick={() => {setShowModal(true)}}
                  className="[@media(min-width:430px)]:w-[365px] [@media(min-width:350px)]:w-[320px] w-[300px] [@media(min-width:430px)]:h-[205px] [@media(min-width:350px)]:h-[180px] h-[170px] rounded-[10px] bg-[#261856] overflow-hidden projectCardAnimation mb-[30px] relative flex justify-center items-center shadow-[0px_0px_6px_0px_#0000000f] mx-[10px]"
                >
                  <div className="w-[100%] h-[100%] rounded-[10px] overflow-hidden">
                    <img
                      src={catagory.img}
                      className="w-[100%] cursor-pointer"
                      alt=""
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 [@media(min-width:430px)]:h-[60px] h-[40px] w-[100%] text-left flex justify-left items-end bg-gradient-to-t from-[#0a012a] text-white mb-[-3px]">
                    <p className="px-[25px] [@media(min-width:430px)]:text-[14px] [@media(min-width:350px)]:text-[13px] text-[12px] pl-[10px] pb-[8px]">
                      {catagory.name}
                    </p>
                  </div>
                  <a
                    href={catagory.link}
                    target="_blank"
                    className="absolute bottom-0 right-0 h-[30px] [@media(min-width:430px)]:w-[95px] w-[88px] [@media(min-width:430px)]:hover:w-[101px] hover:w-[95px] text-right flex justify-end items-end text-white hover:text-white mb-[-3px] cursor-pointer transition-[0.3s]"
                  >
                    <p className="[@media(min-width:430px)]:text-[13px] text-[12px] pr-[10px] pb-[8px] flex items-center justify-between w-full">
                      <span>Live Demo</span>
                      <FaArrowRight className="[@media(min-width:430px)]:text-[14px] [@media(min-width:350px)]:text-[13px] text-[12px]" />
                    </p>
                  </a>
                </label>
                <input
                  type="checkbox"
                  id={`my_modal_${catagory.id}`}
                  className="modal-toggle"
                />
                <div className={`modal GeologicaFont`} role="dialog">
                  <div
                    className="modal-box [@media(min-width:640px)]:px-[1rem] px-[5px] [@media(min-width:640px)]:py-[1rem] py-[5px] max-w-[55rem] [@media(min-width:640px)]:!h-[30rem] [@media(min-width:480px)]:h-[22rem] h-[18rem] bg-[#fffffff0] !rounded-none cursor-default scrollbar-hide"
                  >
                    <div className="w-full overflow-y-hidden relative">
                      <img
                        src={catagory.fullView}
                        className="w-[100%]"
                        alt=""
                      />
                      <div className="absolute bottom-0 right-0 [@media(min-width:640px)]:h-[30px] h-[25px] [@media(min-width:360px)]:w-[100px] w-[90px] bg-[#fff] text-right flex justify-start items-end pl-[10px] ">
                        <a
                          href={catagory.link}
                          target="_blank"
                          className="h-[100%] [@media(min-width:640px)]:w-[85px] [@media(min-width:475px)]:w-[80px] [@media(min-width:360px)]:w-[70px] w-[65px] [@media(min-width:640px)]:hover:w-[101px] [@media(min-width:475px)]:hover:w-[85px] [@media(min-width:360px)]:hover:w-[75px] hover:w-[70px] cursor-pointer text-right flex justify-start items-center transition-[0.3s] "
                        >
                          <p className="[@media(min-width:640px)]:text-[13px] [@media(min-width:475px)]:text-[12px] [@media(min-width:360px)]:text-[11px] text-[10px] flex items-center justify-between w-full text-black">
                            <span>Live Demo</span>{" "}
                            <FaArrowRight className="[@media(min-width:640px)]:text-[14px] [@media(min-width:475px)]:text-[13px] [@media(min-width:360px)]:text-[11px] text-[10px]" />
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <label
                    className="modal-backdrop"
                  onClick={() => {setShowModal(false)}}
                    htmlFor={`my_modal_${catagory.id}`}
                  >
                    Close
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
