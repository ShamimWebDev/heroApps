import React, { useState, useEffect } from "react";
import { Download, Star } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApps from "../hooks/useApps";
import { loadApplist, removeFromApplist } from "../utils/localStorage";
import LoadingSpinner from "../Components/LoadingSpinner";

const formatNumber = (num) => {
  if (num === undefined || num === null) return "-";
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(0)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(0)}K`;
  return num;
};

const InstalledApps = () => {
  const { apps, loading, error } = useApps();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOption, setSortOption] = useState("none");
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    const applist = loadApplist();
    if (apps.length) {
      const installed = apps.filter((app) =>
        applist.some((a) => a.id === app.id)
      );
      setInstalledApps(installed);
    } else {
      setInstalledApps([]);
    }
  }, [apps]);

  const handleUninstall = (id) => {
    setActionLoading(true);
    setTimeout(() => {
      removeFromApplist(id);
      setInstalledApps((prev) => prev.filter((app) => app.id !== id));
      toast.success("App uninstalled successfully!");
      setActionLoading(false);
    }, 500);
  };

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load apps</p>
    );
  if (!installedApps.length)
    return <p className="text-center mt-10">No installed apps.</p>;

  const sortedApps = (() => {
    if (sortOption === "downloads-asc") {
      return [...installedApps].sort(
        (a, b) => (a.downloads || 0) - (b.downloads || 0)
      );
    } else if (sortOption === "downloads-desc") {
      return [...installedApps].sort(
        (a, b) => (b.downloads || 0) - (a.downloads || 0)
      );
    } else {
      return installedApps;
    }
  })();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-10 space-y-6">
      {actionLoading && <LoadingSpinner />}
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 text-sm">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6">
        <p className="text-gray-600 text-sm font-medium">
          {sortedApps.length} Apps Found
        </p>
        <div className="relative mt-2 md:mt-0">
          <select
            className="select select-sm border border-gray-300 rounded-md text-sm text-gray-700 pr-8 appearance-none focus:outline-none"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="none">Sort by downloads</option>
            <option value="downloads-asc">Low → High</option>
            <option value="downloads-desc">High → Low</option>
          </select>
          <span className="absolute right-2 top-2.5 text-gray-400 pointer-events-none">
            ▼
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-4">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-white hover:bg-gray-50 transition rounded-xl shadow-md p-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center">
                {app.image ? (
                  <img
                    src={app.image}
                    alt={app.title || app.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <div className="text-gray-400 text-xs">No Img</div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-base md:text-lg">
                  {app.title || app.name}
                </h3>
                <div className="flex items-center gap-3 mt-1 text-xs md:text-sm text-gray-600">
                  <div className="flex items-center gap-1 text-green-600">
                    <Download className="w-3.5 h-3.5" />
                    <span>{formatNumber(app.downloads)}</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-3.5 h-3.5 fill-yellow-500" />
                    <span>{app.ratingAvg ?? "-"}</span>
                  </div>
                  <span className="text-gray-500">{app.size ?? "-"} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="btn btn-sm bg-emerald-500 hover:bg-emerald-600 text-white px-4 rounded-md"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
