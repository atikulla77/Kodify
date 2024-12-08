import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import logo from "../image/kodify003.png";

function Lodding() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-full h-full absolute left-0 top-0 [@media(min-width:600px)]:flex hidden justify-center items-center text-center z-0">
        <PuffLoader color="#03c0ff39" size={140} className="" />
      </div>
      <div className="w-full h-full absolute left-0 top-0 [@media(min-width:600px)]:hidden flex justify-center items-center text-center z-0">
        <PuffLoader color="#03c0ff39" size={120} className="" />
      </div>
      <div className="w-full h-full flex justify-center items-center relative z-10">
        <img src={logo} className="[@media(min-width:600px)]:w-[70px] w-[55px] mx-auto" />
      </div>
    </div>
  );
}

export default Lodding;
