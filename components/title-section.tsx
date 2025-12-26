import Image from "next/image";

const TitleSection = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="relative h-[380px] text-white overflow-hidden mt-38">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/about.jpg"
          alt="Background Image"
          fill
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
        <h1
          className="text-5xl font-extralight leading-tight capitalize 
                     animate-fadeInUp transition-all duration-700 
                     hover:text-yellow-400 hover:scale-105"
        >
          {title}
        </h1>
        <p
          className="text-xl text-gray-300 font-light mt-2 
                     animate-fadeIn transition-all duration-1000 
                     hover:text-yellow-300"
        >
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default TitleSection;