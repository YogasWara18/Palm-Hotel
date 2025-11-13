const RoomDetailSkeleton = () => {
  return (
    <div className="max-w-screen-xl py-16 px-4 grid lg:grid-cols-12 gap-8 mx-auto animate-pulse">
      {/* Single Post */}
      <div className="md:col-span-8">
        <div className="w-full h-80 md:h-[520px] bg-gray-200 rounded-sm mb-8"></div>
        <h1 className="mb-8">
          <div className="h-10 w-96 md:w-[600px] rounded bg-gray-200"></div>
        </h1>
        <article className="">
          <div className="h-5 w-full rounded bg-gray-200 mb-2"></div>
          <div className="h-5 w-11/12 rounded bg-gray-200 mb-2"></div>
          <div className="h-5 w-full rounded bg-gray-200 mb-2"></div>
          <div className="h-5 w-11/12 rounded bg-gray-200 mb-2"></div>
          <div className="h-5 w-10/12 rounded bg-gray-200 mb-2"></div>
          <div className="h-5 w-4/5 rounded bg-gray-200 mb-2"></div>
          <div className="h-5 w-1/3 rounded bg-gray-200 mb-8"></div>
        </article>
      </div>
      {/* Most Populer Post */}
      <div className="md:col-span-4">
        <div className="border-gray-300 px-3 py-5 bg-gray-100 rounded-md">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 rounded-full bg-gray-200"></div>
              <div className="h-5 w-20 rounded-full bg-gray-200"></div>
            </div>
            <h1 className="text-2xl font-semibold text-gray-600">
              <div className="h-6 w-36 rounded bg-gray-200"></div>
            </h1>
          </div>
          <div className="mb-4">
            <div className="h-5 w-36 rounded-full bg-gray-200"></div>
            <div className="h-12 w-full rounded-sm bg-gray-200 mt-2"></div>
          </div>
          <div className="mb-4">
            <div className="h-5 w-28 rounded-full bg-gray-200"></div>
            <div className="h-12 w-full rounded-sm bg-gray-200 mt-2"></div>
          </div>
          <div className="mb-4">
            <div className="h-5 w-32 rounded-full bg-gray-200"></div>
            <div className="h-12 w-full rounded-sm bg-gray-200 mt-2"></div>
          </div>
          <div className="h-12 w-full rounded-sm bg-gray-200 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailSkeleton;
