import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-700">
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
            <h1 className="text-white font-extralight">
              Palm Hotel & Beach Club{" "}
            </h1>
            <p className="text-white">
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
            <p className="text-white">
              {/* lorem7 */}
              Carrer de la Marina 19, 08005 Barcelona, Spain
            </p>
            <form action="" className="mt-5">
              <div className="mb-5">
                <input
                  type="text"
                  name="email"
                  className="w-full p-3 rounded-sm bg-white"
                  placeholder="johndoe@example.com"
                />
              </div>
              <button className="bg-yellow-500 p-3 font-light text-white w-full text-center rounded-sm hover:bg-yellow-600">
                Subscribe
              </button>
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
