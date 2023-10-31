import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import pic from '../../public/image/pic.webp';
import pic2 from '../../public/image/2.jpg';
import pic3 from '../../public/image/3.webp';
import pic4 from '../../public/image/4.jpeg';
import pic5 from '../../public/image/5.jpeg';

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
}


const Home = () => {
  const sliderSettings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start pl-4 lg:pl-24 p-12 min-h-screen bg-gray-100">
      <div className="mb-6 lg:mb-0 lg:mr-8 lg:p-6">
        <Slider {...sliderSettings}>
          <div>
            <Image
              src={pic}
              alt="landing picture 1"
              width={350}
              height={100}
              priority
            />
          </div>
          <div>
            <Image
              src={pic2}
              alt="landing picture 1"
              width={350}
              height={100}
              priority
            />
          </div>
          <div>
            <Image
              src={pic3}
              alt="landing picture 2"
              width={350}
              height={100}
              priority
            />
          </div>
          <div>
            <Image
              src={pic4}
              alt="landing picture 3"
              width={350}
              height={100}
              priority
            />
          </div>
          <div>
            <Image
              src={pic5}
              alt="landing picture 3"
              width={350}
              height={100}
              priority
            />
          </div>
        </Slider>
      </div>
      <div className="text-center lg:text-left p-12">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">
          An opportunity for<span className="text-[#FF7C24]"> sustainable living </span>
          <div>and Development</div>
        </h1>
        <p className="text-base lg:text-lg mb-4 lg:mb-2">
          and the Exclusive Representative of NUUKO POWER Solar Brand in the Country
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start">
          <button className="bg-[#0C3D90] hover:bg-blue-700 text-white font-bold py-2 px-4 m-2">
            Learn More
          </button>
          <button className="bg-[#FF7C24] hover:bg-green-700 text-white font-bold py-2 px-4 m-2">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

