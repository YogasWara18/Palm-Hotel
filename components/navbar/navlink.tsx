"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import clsx from "clsx";
import Image from "next/image";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <div className="flex items-center justify-end md:order-2 gap-1">
          <div className="hidden text-sm bg-gray-50 border rounded-full md:me-0 md:block focus:ring-4 focus:ring-gray-300">
            <Image
              className="size-8 rounded-full"
              src={session.user.image || "/avatar.svg"}
              width={64}
              height={64}
              alt="avatar"
            />
          </div>
          <div className="flex items-center">
            <button
              onClick={() => signOut()}
              className="md:block hidden py-2 px-4 bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-sm cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : null}
      {/* Toogle button navlink */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>

      {/* Navlink */}
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-transparent md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-transparent">
          <li>
            <Link
              className="block py-2 px-3 text-white font-normal hover:bg-yellow-500 rounded-sm md:hover:bg-yellow-500 md:p-0"
              href={`/`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-3 text-white font-normal hover:bg-yellow-500 rounded-sm md:hover:bg-yellow-500 md:p-0"
              href={`/about`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-3 text-white font-normal hover:bg-yellow-500 rounded-sm md:hover:bg-yellow-500 md:p-0"
              href={`/room`}
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 px-3 text-white font-normal hover:bg-yellow-500 rounded-sm md:hover:bg-yellow-500 md:p-0"
              href={`/contact`}
            >
              Contact
            </Link>
          </li>
          {/* Show menu base on session */}
          {session && (
            <>
              <li>
                <Link
                  className="block py-2 px-3 text-white hover:bg-yellow-500 rounded-sm md:hover:bg-transparent md:p-0 font-normal"
                  href={`/myreservation`}
                >
                  My Reservation
                </Link>
              </li>
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link
                      className="block py-2 px-3 text-white hover:bg-yellow-500 rounded-sm md:hover:bg-transparent md:p-0 font-normal"
                      href={`/admin/dashboard`}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block py-2 px-3 text-white hover:bg-yellow-500 rounded-sm md:hover:bg-transparent md:p-0 font-normal"
                      href={`/admin/room`}
                    >
                      Manage Room
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
          {session ? (
            <li className="pt-2 md:pt-0">
              <button
                onClick={() => signOut()}
                className="md:hidden py-2.5 px-4 bg-yellow-600 text-white hover:bg-yellow-300 rounded-sm cursor-pointer font-light"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li className="pt-2 md:pt-0">
              <Link
                href="/signin"
                className="py-2.5 px-6 bg-yellow-500 text-white hover:bg-yellow-600 rounded-sm font-light"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navlink;
