import AboutSlider from './main_slide';
import React from 'react';

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:pl-24 p-12 bg-[#0C3D90]">
        <div className="w-full sm:w-1/2 text-center lg:text-left lg:mr-4">
          {' '}
          {/* Added 'lg:mr-4' for margin */}
          <h1 className="text-white text-2xl lg:text-4xl px-12">About</h1>
          <h1 className="text-2xl lg:text-4xl font-bold  text-white px-12 py-3">
            Regal<span className="text-[#FF7C24]"> Group </span>
          </h1>
          <p className="text-base lg:text-lg px-12 py-6 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor i
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <AboutSlider />
        </div>
      </div>
    </>
  );
};

export default About;
