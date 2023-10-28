import Image from 'next/image';
import pic from '../public/image/pic.webp';

function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start pl-4 lg:pl-24 p-12 min-h-screen bg-gray-100">
      <div className="mb-6 lg:mb-0 lg:mr-8 lg:p-6">
        <Image
          src={pic}
          alt="landing picture"
          width={205}
          height={75}
          priority
        />
      </div>
      <div className="text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8">An opportunity for<span className="text-[#FF7C24]"> sustainable living </span> and Development</h1>
        <p className="text-base lg:text-lg mb-4 lg:mb-2">and the Exclusive Representative of NUUKO POWER Solar Brand in the Country</p>
      </div>
    </div>
  );
}

export default Home;
