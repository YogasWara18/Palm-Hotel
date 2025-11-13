import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export const POST = async (request: Request) => {
  const data = await request.json();
  const reservationId = data.order_id as string;

  let responseData = null;

  const transactionStatus = data.transaction_status as string;
  const paymentType = (data.payment_type as string) || null;
  const fraudStatus = data.fraud_status as string;
  const statusCode = data.status_code as string;
  const grossAmount = data.gross_amount as string;
  const signatureKey = data.signature_key as string;

  const hash = crypto
    .createHash("sha512")
    .update(
      `${reservationId}${statusCode}${grossAmount}${process.env.MIDTRANS_SERVER_KEY}`
    )
    .digest("hex") as string;
  if (signatureKey !== hash) {
    return NextResponse.json(
      { error: "Missing Signature Key" },
      { status: 400 }
    );
  }

  if (transactionStatus == "capture") {
    if (fraudStatus == "accept") {
      const transaction = await prisma.payment.update({
        data: {
          method: paymentType,
          status: "paid",
        },
        where: { reservationId },
      });
      responseData = transaction;
    }
  } else if (transactionStatus == "settlement") {
    const transaction = await prisma.payment.update({
      data: {
        method: paymentType,
        status: "paid",
      },
      where: { reservationId },
    });
    responseData = transaction;
  } else if (
    transactionStatus == "cancel" ||
    transactionStatus == "deny" ||
    transactionStatus == "expire"
  ) {
    const transaction = await prisma.payment.update({
      data: {
        method: paymentType,
        status: "failure",
      },
      where: { reservationId },
    });
    responseData = transaction;
  } else if (transactionStatus == "pending") {
    const transaction = await prisma.payment.update({
      data: {
        method: paymentType,
        status: "pending",
      },
      where: { reservationId },
    });
    responseData = transaction;
  }
  return NextResponse.json({ responseData }, { status: 200 });
};
