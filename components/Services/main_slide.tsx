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
            <div className="relative flex-[0_0_40%] group" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} className="w-full h-full" alt="alt" />
              <div className="absolute inset-0 flex flex-col items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white font-bold text-lg mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Deserunt eos porro quisquam dicta. Omnis adipisci maiores deleniti accusantium labore, magnam sapiente obcaecati a 
                inventore voluptatem voluptates, reprehenderit consequuntur cupiditate consectetur.</p>
                <button className="bg-[#0C3D90] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          );
        })}
      </ServicesCarousel>
    </div>


  );
};

export default ServicesSlider;