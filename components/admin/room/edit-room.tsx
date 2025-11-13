import React from "react";
import { getAmenities, getRoomById } from "@/lib/data";
import { notFound } from "next/navigation";
import EditForm from "@/components/admin/room/edit-form";

const EditRoom = async ({ roomId }: { roomId: string }) => {
  const [amenities, room] = await Promise.all([
    getAmenities(),
    getRoomById(roomId),
  ]);
  if (!room) return notFound();
  if (!amenities) return null;

  // console.log(room);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Edit a Room</h1>
      <EditForm amenities={amenities} room={room} />
    </div>
  );
};

export default EditRoom;
