"use client"
import pic from '../../public/image/pic.webp';
import pic1 from '../../public/image/pic1.jpg';
import pic2 from '../../public/image/pic2.webp';
import pic3 from '../../public/image/pic3.jpeg';
import pic4 from '../../public/image/pic4.jpeg';
import ServicesCarousel from './Carousel';
import Image from "next/image";

const ServicesSlider = () => {
  const images = [pic, pic1, pic2, pic3, pic4];
  return (
    <div>

      <ServicesCarousel loop>
        {images.map((src, i) => {
          return (
            <div className="relative  flex-[0_0_50%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src}  className="w-full  h-full" alt="alt" 
            />
            </div>
          );
        })}
      </ServicesCarousel>
    </div>


  );
};

export default ServicesSlider;