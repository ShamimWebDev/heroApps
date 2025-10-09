import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      {/* Spinner */}
      <div className="w-16 h-16 rounded-full border-4 border-t-transparent animate-spin border-gradient"></div>

      {/* Loading text */}
      <p className="mt-4 text-gray-700 text-lg font-medium tracking-wide">
        Loading, please wait...
      </p>

      {/* Inline gradient style */}
      <style>
        {`
          .border-gradient {
            border-image: linear-gradient(to right, #4f46e5, #06b6d4) 1;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;
