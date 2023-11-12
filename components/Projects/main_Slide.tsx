'use client';
import React from 'react';
import pic from '../../public/image/pic.webp';
import pic1 from '../../public/image/pic1.jpg';
import pic2 from '../../public/image/pic2.webp';
import pic3 from '../../public/image/pic3.jpeg';
import pic4 from '../../public/image/pic4.jpeg';
import logo from '../../public/image/logo.png';
import ProjectsCarousel from './ProjectsCarousel';
import Image from 'next/image';

const ProjectsSlider = () => {
  const images = [pic, pic1, pic2, pic3, pic4, logo];

  return (
    <ProjectsCarousel loop>
      {images.map((src, i) => (
        <div
          className="relative flex-[0_0_33.33%] flex-col items-center justify-end px-10"
          key={i}
        >
          {/* use object-cover + fill since we don't know the height and width of the parent */}
          <div className="relative w-full h-full flex-col">
            <div className="h-2/3">
              <Image src={src} className="w-full h-full" alt="alt" />
            </div>
            <div className="h-1/2 mt-5">
              <p className="text-black font-bold text-xs mb-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt eos porro quisquam dicta. Omnis adipisci maiores
                deleniti
              </p>
              <button className="bg-[#FF7C24] hover:bg-[#0C3D90] text-white px-4 py-1 rounded-full">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}
    </ProjectsCarousel>
  );
};

export default ProjectsSlider;
