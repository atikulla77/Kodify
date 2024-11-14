import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GoDotFill } from "react-icons/go";

import user1 from "../image/Testimonial/img1.jpg";
import user2 from "../image/Testimonial/img2.jpg";
import user3 from "../image/Testimonial/img3.jpg";
import user4 from "../image/Testimonial/img4.jpg";
import user5 from "../image/Testimonial/img5.jpg";


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "-40px" }}>
        <ul className="m-0 " id="bannerDotId">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="bannerDotliId w-[17px] bottom-0">
        <GoDotFill className="cursor-pointer [@media(min-width:640px)]:text-[17px] text-[16px]" />
      </div>
    ),
  };

  const TestimonialClint = [
    {
      id: 1,
      name: "Christopher",
      description:
        "It really met my requirements. You guys were very patient even though there were delays from my side. The price was competitive and all our requirements were met. If somebody were to ask me for something similar, I would definitely recommend you guys",
      position: "United States",
      image: user1,
    },
    {
      id: 2,
      name: "Anthony",
      description:
        "This is a very Good Seller who is prompt, courteous, and has a good command of English. I continue to work with him because he has many skills beyond what he advertises.",
      position: "South Korea",
      image: user2,
    },
    {
      id: 3,
      name: "Richard",
      description:
        "I am very pleased with the quality of leads delivered. Leads were delivered on time. Very professional, and responsive. I plan to use his services again!",
      position: "United States",
      image: user3,
    },
    {
      id: 4,
      name: "Barbara",
      description:
        "Went over and beyond on my order. Thank you very much you did more than I asked and will for sure work with you on future projects. I can recommend this freelancer to any future customer who needs good work done!",
      position: "Canada",
      image: user4,
    },
    {
      id: 5,
      name: "Kenneth",
      description:
        "This is a very Good Seller who is prompt, courteous, and has a good command of English. I continue to work with him because he has many skills beyond what he advertises.",
      position: "United Kingdom ",
      image: user5,
    },
  ];

  return (
    <div className="text-[white] body-font bg-[#0a012a] GeologicaFont pt-[3rem]">
      <div className="xl:w-[1230px] w-[96%] [@media(min-width:460px)]:px-5 px-3 mx-auto pb-[50px] relative ">
        <p className="text-[#03BFFF] [@media(min-width:530px)]:text-[15px] [@media(min-width:460px)]:text-[13px] text-[12px] mx-auto  text-center relative z-10">
          Testimonial
        </p>
        <h1 className="[@media(min-width:640px)]:text-3xl [@media(min-width:460px)]:text-[26px] text-[20px] [@media(min-width:640px)]:leading-[36px] [@media(min-width:460px)]:leading-[32px] leading-[25px] font-semibold title-font [@media(min-width:460px)]:mb-[19px] [@media(min-width:640px)]:mb-[1.5rem] mb-[0px] text-center relative z-10">
          What People Say
          <br />
          About Me
        </h1>
        <div className=" [@media(min-width:846px)]:py-[2px] py-[10px] mx-auto flex items-center w-[100%] relative z-10 ">
          <Slider {...settings} className="w-full h-full">
            {TestimonialClint.map((key) => {
              return (
                <div
                key={key.id}
                  className="[@media(min-width:640px)]:px-[10px] px-0 w-[100%] my-[10px]"
                  data-aos="fade-right"
                >
                  <div className="h-full [@media(min-width:460px)]:bg-[#170a4642] bg-none [@media(min-width:640px)]:px-8 px-6 [@media(min-width:640px)]:py-8 py-4 rounded [@media(min-width:460px)]:shadow-[0px_0px_6px_0px_#0000000f] shadow-none [@media(min-width:460px)]:text-left text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block [@media(min-width:460px)]:w-5 w-[2rem] [@media(min-width:460px)]:h-5 h-[2rem] text-gray-400 [@media(min-width:640px)]:mb-4 mb-3 [@media(min-width:460px)]:mx-0 mx-auto"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="[@media(min-width:460px)]:leading-relaxed leading-[17px] [@media(min-width:640px)]:mb-6 mb-4 [@media(min-width:640px)]:text-[16px] text-[13px] h-[115px]">
                      {key.description}
                    </p>
                    <div className="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src={key.image}
                        className="[@media(min-width:640px)]:w-12 w-[35px] [@media(min-width:640px)]:h-12 h-[35px] rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span className="flex-grow flex flex-col [@media(min-width:640px)]:pl-4 [@media(min-width:460px)]:pl-[13px] pl-[10px] [@media(min-width:640px)]:leading-[23px] leading-[17px] text-left">
                        <span className="title-font [@media(min-width:460px)]:font-medium font-normal [@media(min-width:640px)]:text-[16px] text-[14px]">
                          {key.name}
                        </span>
                        <span className="[@media(min-width:640px)]:text-sm [@media(min-width:460px)]:text-[12px] text-[11px]  font-light [@media(min-width:460px)]:ml-0 ml-[1.5px]">
                          {key.position}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

      </div>
    </div>
  );
};

function SampleNextArrow() {
  return <div className="hidden"></div>;
}
function SamplePrevArrow() {
  return <div className="hidden"></div>;
}

export default Testimonial;
