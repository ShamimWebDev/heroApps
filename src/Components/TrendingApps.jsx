import React from "react";
import AppCard from "./AppCard";
import useApps from "../hooks/useApps";

const TrendingApps = () => {
  const { apps, loading, error } = useApps(); // custom hook useApps

  if (loading)
    return <p className="text-center py-10 text-gray-600">Loading apps...</p>;

  if (error)
    return (
      <p className="text-center text-red-500 py-10">
        Found Error {error.message}
      </p>
    );

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Trending Apps{" "}
          <i className="fa-solid fa-arrow-trend-up text-[#773FE8]"></i>
        </h2>
        <p className="text-gray-500">
          Explore the most downloaded and top-rated apps this week.
        </p>
      </div>

      {/* App Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {apps.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="flex justify-center pt-5">
        <a
          href="/apps"
          className="inline-block text-white font-semibold px-5 py-2 rounded-lg transition-all"
          style={{
            background:
              "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
          }}
        >
          Show ALl
        </a>
      </div>
    </div>
  );
};

export default TrendingApps;
