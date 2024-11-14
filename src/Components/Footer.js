import React from "react";

function Footer() {
  return (
    <div
      className="w-full h-full GeologicaFont border-t-[1px] border-[#ffffff42]"
      id="footer"
    >
      <div className="xl:w-[1230px] w-[96%] mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
        <span className="inline-flex sm:hidden sm:ml-auto mt-[-2px] justify-center sm:justify-start z-10 pb-[10px] ">
          <a href="" className="text-white cursor-pointer text-[14px]">
            Terms & Condition
          </a>
          <a
            href=""
            className="text-white ml-[10px] cursor-pointer text-[14px]"
          >
            Privacy Policy
          </a>
        </span>

        <p className="text-[#ffffff9c] text-sm text-center sm:text-left">
          © CodeeFly 2024 | All Rights Reserved
        </p>
        <span className="sm:inline-flex hidden sm:ml-auto mt-[-2px] justify-center sm:justify-start z-10">
          <a href="" className="text-white cursor-pointer text-[14px]">
            Terms & Condition
          </a>
          <a href="" className="text-white ml-[45px] cursor-pointer text-[14px]">
            Privacy Policy
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
