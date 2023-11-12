import React from 'react';
import ServicesSlider from './main_slide';
const Services = () => {
  return (
    <>
      <div className="py-5 font-bold text-4xl">
        Product and{' '}
        <span className="text-[#FF7C24] font-bold text-4xl">Services</span>
      </div>
      <ServicesSlider />
    </>
  );
};

export default Services;
