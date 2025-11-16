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
          <div className="flex items-center space-x-4">
            <button
              onClick={() => signOut()}
              className="w-10 h-10 rounded-full object-cover"
            >
              {/* Sign out */}
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
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm bg-transparent md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-transparent gap-y-3">
          <li>
            <Link
              className="px-3 py-2 rounded-md text-sm font-light text-white hover:text-yellow-500 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500"
              href={`/`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-2 rounded-md text-sm font-light text-white hover:text-yellow-500 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500"
              href={`/about`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-2 rounded-md text-sm font-light text-white hover:text-yellow-500 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500"
              href={`/room`}
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              className="px-3 py-2 rounded-md text-sm font-light text-white hover:text-yellow-500 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500"
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
                  className="px-3 py-2 rounded-md text-sm font-light text-white hover:text-yellow-500 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500"
                  href={`/myreservation`}
                >
                  My Reservation
                </Link>
              </li>
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link
                      className="px-3 py-2 rounded-md text-sm font-light text-white hover:text-yellow-500 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500"
                      href={`/admin/dashboard`}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-3 py-2 rounded-md text-sm font-light text-white hover:text-yellow-500 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-500"
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
                className="cursor-pointer transition-all bg-transparent text-white px-6 py-2 rounded-lg border-yellow-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-yellow-500 shadow-yellow-500 active:shadow-none"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li className="pt-2 md:pt-0">
              <Link
                href="/signin"
                className="cursor-pointer transition-all bg-transparent text-white px-6 py-2 rounded-lg border-yellow-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-yellow-500 shadow-yellow-500 active:shadow-none"
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
