import Image from "next/image";
import { reservationProps } from "@/types/reservation";
import { formatCurrency, formatDate } from "@/lib/utils";
import { differenceInCalendarDays } from "date-fns";
import Link from "next/link";

const MyReservationList = async ({
  reservation,
}: {
  reservation: reservationProps[];
}) => {
  return (
    <div className="">
      {reservation.map((item) => (
        <div
          className="bg-white shadow pb-4 mb-4 md:pb-0 relative"
          key={item.id}
        >
          <div className="flex items-center justify-between bg-gray-100 px-2 py-1 rounded-t-sm">
            <h1 className="text-sm font-medium text-gray-900 truncate">
              Reservation ID: #{item.id}
            </h1>
            <div className="flex gap-1 px-3 py-2 text-sm font-normal">
              <span>Status:</span>
              <span className="font-bold uppercase">
                {item.Payment?.status}
              </span>
            </div>
          </div>
          <div
            key={item.id}
            className="flex flex-col mb-4 items-start bg-white rounded-sm md:flex-row md:w-full"
          >
            <Image
              src={item.Room.image}
              width={500}
              height={300}
              className="object-cover w-full rounded-t-sm h-60 md:h-auto md:w-1/3 md:rounded-none md:rounded-s-sm"
              alt="image tour"
            />
            <div className="flex flex-col justify-between p-4 leading-normal w-full">
              <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-90">
                {item.Room.name}
              </h5>
              <div className="flex items-center gap-1 mb-3 font-normal text-gray-700">
                <div className="w-full">
                  <div className="flex items-center justify-between text-sm font-medium text-gray-900 truncate">
                    <span>Price</span>
                    <span>{formatCurrency(item.Room.price)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium text-gray-900 truncate">
                    <span className="truncate">Expected Arrival</span>
                    <span>{formatDate(item.starDate.toISOString())}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium text-gray-900 truncate">
                    <span className="truncate">Expected Departure</span>
                    <span>{formatDate(item.endDate.toISOString())}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium text-gray-900 truncate">
                    <span>Duration</span>
                    <span>
                      {differenceInCalendarDays(item.endDate, item.starDate)}
                      <span className="ml-1">Night</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium text-gray-900 truncate">
                    <span>Sub Total</span>
                    <span>
                      {item.Payment && formatCurrency(item.Payment?.amount)}
                    </span>
                  </div>
                </div>
              </div>
              {/* button detail */}
            </div>
          </div>
          <div className="flex items-end justify-end absolute inset-4">
            {item.Payment?.status === "unpaid" ? (
              <Link
                href={`/checkout/${item.id}`}
                className="px-6 py-1 bg-orange-400 text-white rounded-md hover:bg-orange-500"
              >
                Pay Now
              </Link>
            ) : (
              <Link
                href={`/myreservation/${item.id}`}
                className="px-5 py-1 bg-orange-400 text-white rounded-md hover:bg-orange-500"
              >
                View Detail
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyReservationList;
