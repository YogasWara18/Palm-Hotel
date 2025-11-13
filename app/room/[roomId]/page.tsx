import { Metadata } from "next";
import { Suspense } from "react";
import RoomDetail from "@/components/room-detail";
import RoomDetailSkeleton from "@/components/skeletons/room-detail-skeleton";

export const metadata: Metadata = {
  title: "Room Detail",
  description: "We have the room with great service.",
};

const RoomDetailPage = async ({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) => {
  const roomId = (await params).roomId;

  return (
    <div className="mt-16">
      <Suspense fallback={<RoomDetailSkeleton />}>
        <RoomDetail roomId={roomId} />
      </Suspense>
    </div>
  );
};

export default RoomDetailPage;
