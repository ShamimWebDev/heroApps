import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Download, Star, ThumbsUp } from "lucide-react";
import { loadApplist, updateApplist } from "../utils/localStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../Components/LoadingSpinner";
import ErrorApp from "../Pages/ErrorApp";

const formatNumber = (num) => {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(0)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(0)}K`;
  return num;
};

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const [installed, setInstalled] = useState(false);

  const app = (apps || []).find((a) => a.id === Number(id));

  useEffect(() => {
    if (app) {
      const installedApps = loadApplist();
      const isInstalled = installedApps.some((a) => a.id === app.id);
      setInstalled(isInstalled);
    }
  }, [app]);

  const handleInstall = () => {
    if (app) {
      updateApplist(app);
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Failed to load apps.</p>
    );

  if (!app) return <ErrorApp />;

  const {
    title,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings = [],
  } = app;

  const ratingsData = ratings.map((r) => ({ name: r.name, count: r.count }));

  return (
    <div className="max-w-5xl mx-auto bg-[#F5F5F5] rounded-2xl p-8 my-10">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={image}
          alt={title}
          className="w-28 h-28 object-cover rounded-2xl"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">{title}</h2>
          <p className="text-lg text-gray-500 mb-4">
            Developed by{" "}
            <span className="text-[#632EE3] font-semibold">{companyName}</span>
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-center mt-4">
            <div className="flex flex-col items-center text-green-600">
              <Download className="w-10 h-10" />
              <span className="text-[#001931] text-lg">Downloads</span>
              <span className="text-gray-800 font-bold text-4xl">
                {formatNumber(downloads)}
              </span>
            </div>

            <div className="flex flex-col items-center text-yellow-500">
              <Star className="w-10 h-10 fill-yellow-500 text-yellow-500" />
              <span className="text-[#001931] text-lg">Average Rating</span>
              <span className="text-gray-800 font-bold text-4xl">
                {ratingAvg}
              </span>
            </div>

            <div className="flex flex-col items-center text-indigo-500">
              <ThumbsUp className="w-10 h-10" />
              <span className="text-[#001931] text-lg">Reviews</span>
              <span className="text-gray-800 font-bold text-4xl">
                {formatNumber(reviews)}
              </span>
            </div>
          </div>

          {/* Install Button */}
          <button
            className={`btn btn-lg mt-5 ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:opacity-90"
            } text-white font-semibold rounded-md`}
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings  */}
      {ratingsData.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Ratings</h2>
          <div className="w-full h-64 bg-[#F5F5F5] rounded-xl p-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={ratingsData}
                margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
              >
                <XAxis type="number" tick={{ fill: "#9CA3AF" }} />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={70}
                  tick={{ fill: "#6B7280" }}
                />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8811" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Description */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          Description
        </h2>
        <div className="text-gray-600 text-lg leading-relaxed space-y-3">
          {Array.isArray(description) ? (
            description.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
