import { Suspense } from "react";
import Main from "@/components/main";
import Hero from "@/components/hero";
import HomeSkeleton from "@/components/skeletons/home-skeleton";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase">Rooms & Rates</h1>
          <p className="py-3">
            {/* lorem10 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
            repellat.
          </p>
        </div>
        {/* Main Content */}
        <Suspense fallback={<HomeSkeleton />}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
}
