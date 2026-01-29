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
        <h1 className="text-xl text-gray-300 font-light">WELCOME TO</h1>
        <p className="text-white text-4xl md:text-6xl mt-4 mb-5 font-extralight text-center">
          PALM HOTEL & BEACH CLUB
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="#"
            className="cursor-pointer transition-all bg-transparent text-white px-6 py-2 rounded-lg border-yellow-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-yellow-500 shadow-yellow-500 active:shadow-none"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="cursor-pointer transition-all bg-transparent text-white px-6 py-2 rounded-lg border-yellow-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-yellow-500 shadow-yellow-500 active:shadow-none"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
