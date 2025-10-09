import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] px-5 py-5">
      {/* Error Image */}
      <img
        src="/pagenotfouond.PNG"
        alt="Page Not Found"
        className="w-90 h-90 object-contain "
      />

      {/* 404 Text */}
      <h1 className="text-6xl font-bold text-gray-800 mb-2">404 Not Found</h1>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-md mb-6">
        Sorry, the page you are looking for might have been removed, renamed, or
        is temporarily unavailable.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/"
          className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-300 text-center"
        >
          Back to Home
        </Link>
        <Link
          to="/apps"
          className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition-colors duration-300 text-center"
        >
          Browse Apps
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
