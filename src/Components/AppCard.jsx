import React from "react";
import { useNavigate } from "react-router-dom";

//  9000000 to convert 9M
const formatNumber = (num) => {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(0)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(0)}K`;
  return num;
};

const AppCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/app/${id}`); 
  };

  return (
    <div
      onClick={handleClick}
      className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out p-5 cursor-pointer"
    >
      {/* Image */}
      <figure className="w-full h-48 bg-gray-200 rounded-t-xl overflow-hidden flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400 text-sm">No Image</div>
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        <h2 className="text-base font-semibold text-gray-800 truncate">
          {title}
        </h2>

        <div className="flex justify-between items-center mt-4">
          {/* Downloads */}
          <div className="flex items-center gap-2">
            <span className="bg-green-100 text-green-600 flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium">
              <i className="fa-solid fa-download text-green-500"></i>
              {formatNumber(downloads)}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="bg-orange-100 text-orange-500 flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium">
              <i className="fa-solid fa-star text-orange-400"></i>
              {ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
