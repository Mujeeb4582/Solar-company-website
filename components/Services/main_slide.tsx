'use client';
import pic from '../../public/image/pic.webp';
import pic1 from '../../public/image/pic1.jpg';
import pic2 from '../../public/image/pic2.webp';
import pic3 from '../../public/image/pic3.jpeg';
import pic4 from '../../public/image/pic4.jpeg';
import logo from '../../public/image/logo.png';
import ServicesCarousel from './Carousel';
import Image from 'next/image';

const ServicesSlider = () => {
  const images = [pic, pic1, pic2, pic3, pic4, logo];
  return (
    <div>
      <ServicesCarousel loop>
        {images.map((src, i) => {
          return (
            <div className="relative flex-[0_0_20%] group shadow-lg " key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} className="w-full h-full" alt="alt" />
              <div className="absolute inset-0 flex flex-col items-center px-10 p-5 mt-20 py-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bg-[#0C3D90] bg-opacity-60">
                <p className="text-white font-bold text-xs ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt eos porro quisquam dicta. Omnis adipisci maiores
                  deleniti
                </p>
                <div className="h-28 pt-2">
                  <button className="  bottem-2 bg-[#FF7C24] hover:bg-[#0C3D90] text-white  px-4 rounded-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </ServicesCarousel>
    </div>
  );
};

export default ServicesSlider;
