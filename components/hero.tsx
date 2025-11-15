// import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Background Image"
          fill
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div> */}
       <div className="relative h-screen w-full overflow-hidden text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className=" absolute inset-0 object-cover w-full h-full"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>


      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-xl text-gray-300 font-light">
          WELCOME TO
        </h1>
        <p className="text-white text-4xl md:text-6xl mt-4 mb-8 font-extralight text-center">
          PALM HOTEL & BEACH CLUB  
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="#"
            className="bg-yellow-500 text-white hover:bg-yellow-600 py-2.5 px-6 md:px-10 text-lg font-light hover:scale-105 hover:shadow-lg transition"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-yellow-500 text-white hover:bg-yellow-500 py-2.5 px-6 md:px-10 text-lg font-light hover:scale-105 hover:shadow-lg transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
