import Image from "next/image";

const TitleSection = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="relative h-68 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/about.jpg"
          alt="Background Image"
          fill
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
        <h1 className="text-5xl font-extralight leading-tight capitalize">{title}</h1>
        <p className="text-xl text-gray-300 font-light">{subTitle}</p>
      </div>
    </div>
  );
};

export default TitleSection;
