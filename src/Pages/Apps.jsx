import React, { useState, useEffect } from "react";
import AppCard from "../Components/AppCard";
import useApps from "../hooks/useApps";
import LoadingSpinner from "../Components/LoadingSpinner";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    setSearchLoading(true);
    const handler = setTimeout(() => {
      setDebouncedSearch(search.trim().toLowerCase());
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(handler);
  }, [search]);

  const searchedApps = debouncedSearch
    ? apps.filter((app) => app.title.toLowerCase().includes(debouncedSearch))
    : apps;

  return (
    <div className="w-11/12 mx-auto pb-7">
      {/* Header */}
      <div className="text-center p-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Our All Applications
        </h2>
        <p className="text-gray-500">
          Explore All Apps on the Market developed by us.
        </p>
      </div>

      {/* Search & Info */}
      <div className="flex flex-col md:flex-row justify-between py-5 items-center gap-4">
        <h1 className="text-3xl font-semibold">
          All Apps{" "}
          <span className="text-sm text-gray-500">
            ({searchedApps.length}) Apps Found.
          </span>
        </h1>

        <label className="relative w-full max-w-md block">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="w-full border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-300 rounded px-10 py-2 outline-none transition-all duration-200"
          />
        </label>
      </div>

      {/* App List / Loading */}
      {loading || searchLoading ? (
        <div className="flex justify-center py-10">
          <LoadingSpinner />
        </div>
      ) : searchedApps.length === 0 ? (
        <p className="text-center text-red-500 text-3xl py-10">
          No Apps Found!
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
