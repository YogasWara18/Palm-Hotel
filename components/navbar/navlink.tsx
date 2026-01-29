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

  // Reusable class untuk semua link menu
  const navlinkClass =
    "px-3 py-2 rounded-md text-sm font-bold text-gray-200 " +
    "hover:text-yellow-500 transition-all duration-300 " +
    "border-b-2 border-transparent hover:border-yellow-500";

  return (
    <>
      {/* Avatar jika login */}
      {session?.user ? (
        <div className="flex items-center justify-end md:order-2 gap-2">
          <div className="hidden md:block">
            <Image
              className="size-10 rounded-full ring-2 ring-yellow-400 shadow-md"
              src={session.user.image || "/avatar.svg"}
              width={64}
              height={64}
              alt="avatar"
            />
          </div>
        </div>
      ) : null}

      {/* Toggle button navlink */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 transition-transform hover:rotate-90 duration-300"
      >
        {!open ? <IoMenu className="size-8" /> : <IoClose className="size-8" />}
      </button>

      {/* Navlink */}
      <div
        className={clsx("w-full md:block md:w-auto", {
          hidden: !open,
        })}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase tracking-wide p-4 mt-4 rounded-sm md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 gap-y-3">
          {/* Menu umum */}
          <li>
            <Link className={navlinkClass} href={`/`}>
              Home
            </Link>
          </li>
          <li>
            <Link className={navlinkClass} href={`/about`}>
              About
            </Link>
          </li>
          <li>
            <Link className={navlinkClass} href={`/room`}>
              Rooms
            </Link>
          </li>
          <li>
            <Link className={navlinkClass} href={`/contact`}>
              Contact
            </Link>
          </li>

          {/* Menu khusus jika login */}
          {session && (
            <>
              <li>
                <Link className={navlinkClass} href={`/myreservation`}>
                  My Reservation
                </Link>
              </li>
              {session.user.role === "admin" && (
                <>
                  <li>
                    <Link className={navlinkClass} href={`/admin/dashboard`}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className={navlinkClass} href={`/admin/room`}>
                      Manage Room
                    </Link>
                  </li>
                </>
              )}
            </>
          )}

          {/* Sign In / Sign Out */}
          {session ? (
            <li className="pt-2 md:pt-0">
              <button
                onClick={() => signOut()}
                className="cursor-pointer transition-all bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:brightness-110 hover:-translate-y-[2px] active:translate-y-[2px]"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <li className="pt-2 md:pt-0">
              <Link
                href="/signin"
                className="cursor-pointer transition-all bg-yellow-500 text-white px-6 py-2 rounded-lg shadow-md hover:brightness-110 hover:-translate-y-[2px] active:translate-y-[2px]"
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