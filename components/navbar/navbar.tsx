import Link from "next/link";
import Image from "next/image";
import Navlink from "@/components/navbar/navlink";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-transparent shadow-sm z-20">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" width={128} height={49} alt="Logo" priority />
        </Link>

        {/* button */}
        {/* <div className="ml-auto flex items-center justify-end gap-4 md:ml-0 md:order-last">
          <div className="text-sm bg-gray-50 border rounded-full md:me-0 md:block focus:ring-4 focus:ring-gray-300">
            {session && (
              <Image
                className="size-8 rounded-full"
                src={session.user.image || "/avatar.svg"}
                width={64}
                height={64}
                alt="avatar"
              />
            )}
          </div>
          {session ? (
            <div className="flex items-center">
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/signin" });
                }}
              >
                <button
                  type="submit"
                  className="md:block hidden py-2 px-4 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-sm"
                >
                  Sign Out
                </button>
              </form>
            </div>
          ) : (
            <div className="flex items-center">
              <Link
                href="/signin"
                className="md:block hidden py-2 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm"
              >
                Sign In
              </Link>
            </div>
          )}
        </div> */}

        <Navlink />
      </div>
    </div>
  );
};

export default Navbar;
