import { auth } from "@/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getReservationByUserId } from "@/lib/data";
import MyReservationList from "@/components/my-reserve-list";

export const metadata: Metadata = {
  title: "My Reservation",
};

const MyOrder = async () => {
  const session = await auth();
  if (!session || !session.user || !session?.user?.id) redirect("/signin");
  const reservation = await getReservationByUserId();
  console.log(reservation);
  if (!reservation?.length)
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-screen-lg mx-auto mt-10 py-20 px-4">
          <h2 className="text-center text-xl">No reservation found.</h2>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-screen-lg mx-auto mt-10 py-20 px-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl text-gray-800 mt-2">
              Hi, <span className="font-bold">{session.user.name}</span>
            </h3>
            <p className="mt-1 font-medium mb-4">
              Here&apos;s your book history :
            </p>
          </div>
        </div>
        <div className="rounded-sm">
          <MyReservationList reservation={reservation} />
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
