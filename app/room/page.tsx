import { Metadata } from "next";
import { Suspense } from "react";
import Main from "@/components/main";
import TitleSection from "@/components/title-section";
import RoomSkeleton from "@/components/skeletons/room-skeleton";

export const metadata: Metadata = {
  title: "Room & Rates",
  description: "Book your escape. Stay your way",
};

const RoomPage = () => {
  return (
    <div>
      <TitleSection
        title="Rooms & Rates"
        subTitle="Your perfect room, just a click away"
      />
      <div className="mt-10 px-4">
        <Suspense fallback={<RoomSkeleton />}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
};

export default RoomPage;
