import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const ErrorApp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-center p-6">
      <div className="flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
        <AlertCircle className="w-14 h-14 text-red-500" />
      </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-3">App Not Found</h1>
      <p className="text-gray-600 max-w-md mb-8">
        Sorry, the app you’re looking for might have been removed, renamed, or is temporarily unavailable.
      </p>

      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-[#632EE3] text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-semibold"
        >
          Back to Home
        </Link>
        <Link
          to="/apps"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
        >
          Browse Apps
        </Link>
      </div>
    </div>
  );
};

export default ErrorApp;
