import type { Metadata } from "next";
// import { auth } from "@/auth";
// import { redirect } from "next/navigation";
import { LuUsers, LuChartArea, LuShoppingCart } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard = async () => {
  //   const session = await auth();
  //   if (!session || !session.user || !session?.user?.id) redirect("/signin");
  //   if (session.user.role !== "admin") redirect("/");

  return (
    <div className="max-w-screen-xl mx-auto py-16 mt-10 px-4">
      <div className="grid md:grid-cols-3 gap-5 pb-10">
        <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
          <div className="p-4 bg-green-400">
            <LuChartArea className="h-12 w-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Revenue</h3>
            <p className="text-3xl">12,768</p>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
          <div className="p-4 bg-red-400">
            <LuShoppingCart className="h-12 w-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Orders</h3>
            <p className="text-3xl">12,768</p>
          </div>
        </div>
        <div className="flex items-center bg-white border rounded-md overflow-hidden shadow-sm">
          <div className="p-4 bg-blue-400">
            <LuUsers className="h-12 w-12 text-white" />
          </div>
          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">Total Customers</h3>
            <p className="text-3xl">12,768</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
