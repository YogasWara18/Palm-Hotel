import { auth } from "@/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import ReservationDetail from "@/components/reservation-detail";

export const metadata: Metadata = {
  title: "Reservation Detail",
};

const MyReservationDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const session = await auth();
  if (!session || !session.user || !session?.user?.id) redirect("/signin");

  const reservationId = (await params).id;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-screen-lg mx-auto mt-10 py-20 px-4">
        {/* Table Post */}
        <Suspense fallback={<p>Loading...</p>}>
          <ReservationDetail reservationId={reservationId} />
        </Suspense>
      </div>
    </div>
  );
};

export default MyReservationDetail;
