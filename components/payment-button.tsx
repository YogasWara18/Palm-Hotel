"use client";

import { useTransition } from "react";
import { reservationProps } from "@/types/reservation";

declare global {
  interface Window {
    snap: any;
  }
}

export const PaymentButton = ({
  reservation,
}: {
  reservation: reservationProps;
}) => {
  const [isPending, startTransition] = useTransition();

  const handlePayment = async () => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/payment", {
          method: "POST",
          body: JSON.stringify(reservation),
        });
        const { token } = await response.json();
        if (token) {
          window.snap.pay(token);
        }
        // revalidatePath("/checkout/[id]");
      } catch (error) {
        console.log(error);
      }
    });
  };

  return (
    <button
      onClick={handlePayment}
      className="px-10 py-4 mt-2 text-center font-semibold text-white w-full bg-orange-400 rounded-sm hover:bg-orange-500 cursor-pointer"
    >
      {!isPending ? "Process Payment" : "Processing..."}
    </button>
  );
};
