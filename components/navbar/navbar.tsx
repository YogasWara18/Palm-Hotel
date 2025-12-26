// components/navbar/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import Navlink from "@/components/navbar/navlink";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-blue-200 shadow-md z-20">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            width={128}
            height={49}
            alt="Logo"
            priority
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Navlink */}
        <Navlink />
      </div>
    </div>
  );
};

export default Navbar;