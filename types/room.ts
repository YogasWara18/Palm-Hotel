import { Prisma } from "@prisma/client";

export type RoomProps = Prisma.RoomGetPayload<{
  include: { RoomAmenities: { select: { amenitiesId: true } } };
}>;

export type RoomProps2 = Prisma.RoomGetPayload<{
  include: {
    RoomAmenities: {
      include: {
        Amenities: {
          select: {
            name: true;
          };
        };
      };
    };
  };
}>;

export type DisabledDateProps = Prisma.ReservationGetPayload<{
  select: {
    starDate: true;
    endDate: true;
  };
}>;
