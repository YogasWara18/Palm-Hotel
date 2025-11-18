import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto w-full px-4 py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          <div className="">
            <Link href={`/`} className="mb-10 block">
              <Image
                src="/logo.png"
                width={128}
                height={49}
                alt="logo"
                priority={true}
              />
            </Link>
            <h1 className="text-white font-extralight text-3xl mb-1.5">
              Palm Hotel & Beach Club
            </h1>
            <p className="text-white font-light ">
              Enjoy tropical luxury where modern comforts blend with natural
              charm. Situated on a stunning beachfront.
            </p>
          </div>
          <div className="">
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-light text-white">Links</h4>
                <ul className="list-item space-y-5 text-white font-normal">
                  <li>
                    <Link href="#">Home</Link>
                  </li>
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">Rooms</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-light text-white">Legal</h4>
                <ul className="list-item space-y-5 text-white font-normal">
                  <li>
                    <a href="#">Legal</a>
                  </li>
                  <li>
                    <a href="#">Term & Condition</a>
                  </li>
                  <li>
                    <a href="#">Payment Method</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="mb-8 text-xl font-light text-white">
              E-mail & Contact Person
            </h4>
            <p className="text-white">+34 972 36 76 25</p>
            <p className="text-white">
              Carrer d Aribau, 3, 17310 Lloret de Mar, Barcelona, Spain
            </p>
            <form action="" className="mt-5">
              <div className="mb-5">
                <input
                  type="text"
                  name="email"
                  className="w-full p-3 rounded-sm bg-white"
                  placeholder="PalmHotel@gmail.com"
                />
              </div>
              <button className="cursor-pointer transition-all bg-transparent text-white px-6 py-2 rounded-lg border-yellow-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-yellow-500 shadow-yellow-500 active:shadow-none">
                Subscribe
              </button>
              <div className="flex justify-center space-x-5 mt-2">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/youtube.png"
                    alt="YouTube"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://whatsap.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/whatsap.png"
                    alt="Messenger"
                    width={30}
                    height={30}
                  />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/tik-tok.png"
                    alt="Twitter"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-white font-light">
        &copy; Copyright 2025 | Yogas Wara | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
