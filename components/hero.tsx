import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Background Image"
          fill
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-6xl font-extralight leading-tight mb-3 mt-35 capitalize">
          Palm Hotel & Beach Club 
        </h1>
        <p className="text-xl text-gray-300 mb-8 font-light">
          Your Island of Comfort and Class
        </p>
        <div className="flex gap-5">
          <Link
            href="#"
            className="bg-yellow-500 text-white hover:bg-yellow-600 py-2.5 px-6 md:px-10 text-lg font-light hover:scale-105 hover:shadow-lg"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-yellow-500 text-white hover:bg-yellow-500 py-2.5 px-6 md:px-10 text-lg font-light hover:scale-105 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
