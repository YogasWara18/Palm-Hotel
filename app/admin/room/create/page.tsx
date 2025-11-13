import CreateRoom from "@/components/admin/room/create-room";
import { Suspense } from "react";

const CreateRoomPage = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto">
      <Suspense fallback={<p>Loading...</p>}>
        <CreateRoom />
      </Suspense>
    </div>
  );
};

export default CreateRoomPage;
