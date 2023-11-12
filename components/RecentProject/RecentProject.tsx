import RecentSlider from '@/components/RecentProject/main_slider';
import React from 'react';
const RecentProject = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center pl-24 lg:pl-24 p-12  bg-[#FF7C24]">
        <div className="w-full sm:w-1/3">
          <RecentSlider />
        </div>
        <div className="text-center lg:text-left p-12 pl-24 sm:w-1/2 w-full">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8 text-white">
            Project Name
          </h1>
          <p className="text-base lg:text-lg mb-4 lg:mb-2 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            reprehenderit velit ea alias quae harum eveniet quisquam aut
            necessitatibus, facilis iusto ipsam. Quia iste aliquam laboriosam
            accusantium pariatur recusandae cupiditate. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Magnam numquam fugit doloremque
            quis, at tempore impedit dignissimos molestias sapiente ullam, quas
            veniam exercitationem accusantium voluptas provident rerum unde
            laborum laudantium?
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-12 bg-gray-100"></div>
    </>
  );
};
export default RecentProject;
