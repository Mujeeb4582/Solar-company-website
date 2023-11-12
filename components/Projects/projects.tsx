import React from 'react';
import ProjectsSlider from './main_Slide';
const Projects = () => {
  return (
    <>
      <div className="py-5 font-bold text-4xl pl-9">
        All <span className="text-[#FF7C24] font-bold text-4xl">Projects</span>
      </div>
      {/* <div className='w-full'> */}
      <ProjectsSlider />
      {/* </div> */}
    </>
  );
};

export default Projects;
