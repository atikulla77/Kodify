import React from "react";

function Projects() {
    const projectsData = [
        {
            id: 1,
            tittle: "",
            image: "",
            link: "",
        }
    ]
  return (
    <div>
      <div
        className="w-full h-full relative md:pt-[3.5rem] pt-[3rem] GeologicaFont "
        name="Skill"
      >
        <div className="w-full text-center text-white relative z-10 md:pb-[1rem] pb-[10px]">
          <h1 className="md:text-[30px] sm:text-[25px] text-[20px] font-bold">
            Portfolio
          </h1>
          <p className="text-[#03bfff] sm:text-[14px] text-[13px] mx-auto">
            Showcasing some of my recent work
          </p>
        </div>
        <div className="py-[10px] flex flex-wrap sm:w-[30rem] md:w-[47rem] lg:w-[60rem] mx-auto w-full justify-between items-center">

        </div>
      </div>
    </div>
  );
}

export default Projects;
