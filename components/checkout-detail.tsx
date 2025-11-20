import Image from "next/image";
import { formatCurrency, formatDate } from "@/lib/utils";
import { getReservationById } from "@/lib/data";
import { differenceInCalendarDays } from "date-fns";
import { PaymentButton } from "@/components/payment-button";

const CheckoutDetail = async ({ reservationId }: { reservationId: string }) => {
  const reservation = await getReservationById(reservationId);
  // console.log(reservation);
  if (!reservation || !reservation.Payment)
    return <h1>No Reservation Found</h1>;

  const duration = differenceInCalendarDays(
    reservation.endDate,
    reservation.startDate
  );

  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div className="order-2">
        <div className="flex flex-col mb-3 items-start bg-white border border-gray-200 rounded-sm md:flex-row md:w-full">
          <div className="aspect-video relative">
            <Image
              src={reservation.Room.image}
              width={500}
              height={300}
              className="object-cover w-full rounded-t-sm aspect-video md:rounded-none md:rounded-s-sm"
              alt="image"
            />
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal w-full">
            <h5 className="mb-1 text-4xl font-bold tracking-tight text-gray-90">
              {reservation.Room.name}
            </h5>
            <div className="flex items-center gap-1 font-2xl text-gray-700">
              <div className="flex items-center justify-center gap-1">
                <span className="text-2xl">
                  {formatCurrency(reservation.Room.price)}
                </span>
                <span>/ night</span>
              </div>
            </div>
          </div>
        </div>
        {/* Payment Button */}
        <PaymentButton reservation={reservation} />
      </div>
      <div className="border border-gray-200 px-3 py-5 bg-white rounded-sm">
        <table className="w-full">
          <tbody>
            <tr className="">
              <td className="py-2">Reservation ID</td>
              <td className="py-2 text-right truncate">#{reservation.id}</td>
            </tr>
            <tr className="">
              <td className="py-2">Name</td>
              <td className="py-2 text-right">{reservation.User.name}</td>
            </tr>
            <tr className="">
              <td className="py-2">Email</td>
              <td className="py-2 text-right">{reservation.User.email}</td>
            </tr>
            <tr className="">
              <td className="py-2 truncate">Phone Number</td>
              <td className="py-2 text-right truncate">
                {reservation.User.phone}
              </td>
            </tr>
            <tr className="">
              <td className="py-2">Arrival</td>
              <td className="py-2 text-right truncate">
                {formatDate(reservation.startDate.toISOString())}
              </td>
            </tr>
            <tr className="">
              <td className="py-2">Departure</td>
              <td className="py-2 text-right truncate">
                {formatDate(reservation.endDate.toISOString())}
              </td>
            </tr>
            <tr className="">
              <td className="py-2 truncate">Duration</td>
              <td className="py-2 text-right">
                <span>
                  {duration} {duration <= 1 ? "Night" : "Nights"}
                </span>
              </td>
            </tr>
            <tr className="">
              <td className="py-2 truncate">Amount in Euro</td>
              <td className="py-2 text-right truncate">
                <span>{formatCurrency(reservation.Payment.amount)}</span>
              </td>
            </tr>
            <tr className="">
              <td className="py-2">Status</td>
              <td className="py-2 text-right">{reservation.Payment.status}</td>
            </tr>
          </tbody>
        </table>
        {/* {order.Payment[0].status === "unpaid" ? (
          <PaymentButton order={order} />
        ) : null} */}
      </div>
    </div>
  );
};

export default CheckoutDetail;
