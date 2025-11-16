import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";
import { Room } from "@prisma/client";
import { formatCurrency } from "@/lib/utils";

const Card = ({ room }: { room: Room }) => {
  return (
    <div className="card m-auto text-gray-300 w-[clamp(400px,100%,600px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 rounded-lg overflow-hidden relative">
       {/* image waraper */}
      <div className="h-[260px] w-auto rounded-t-sm relative">
        <Image
          src={room.image}
          width={484}
          height={256}
          alt="blog 1"
          className="w-full h-full object-cover rounded-t-sm"
        />
      </div>
      {/* Icons Wraper */}
      <div className="p-8">
        <h4 className="text-2xl font-medium">
          <Link
            href={`/room/${room.id}`}
            className="hover:text-white transition duration-150"
          >
            {room.name}
          </Link>
        </h4>
        <h4 className="text-xl mb-7">
          <span className="font-semibold text-yellow-500">
            {formatCurrency(room.price)}
          </span>
          <span className="text-white text-sm">/Night</span>
        </h4>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IoPeopleOutline />
            <span>
              {room.capacity} {room.capacity === 1 ? "person" : "people"}
            </span>
          </div>
          <Link
            href={`/room/${room.id}`}
            className="cursor-pointer transition-all bg-transparent text-white px-6 py-2 rounded-lg border-yellow-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-yellow-500 shadow-yellow-500 active:shadow-none"
          >
            Book Now
          </Link>
        </div>
      </div>
      <div className="h-2 w-full bg-gradient-to-l via-yellow-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
      <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-500 group-hover:via-yellow-500 w-[100%] m-auto rounded transition-all"></div>
    </div>
  );
};

export default Card;
