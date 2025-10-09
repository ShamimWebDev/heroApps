import React, { Component } from "react";

class TrustedSection extends Component {
  render() {
    return (
      <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-16 px-6 -mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Total Downloads */}
            <div className="flex justify-between items-center  p-5 rounded-lg">
              <div className="text-left">
                <p className="text-sm text-gray-200">Total Downloads</p>
                <h3 className="text-3xl font-extrabold">29.6M</h3>
                <p className="text-sm text-gray-300">
                  21% More Than Last Month
                </p>
              </div>
              <i className="fa-solid fa-download text-4xl"></i>
            </div>

            {/* Total Reviews */}
            <div className="flex justify-between items-center  p-5 rounded-lg">
              <div className="text-left">
                <p className="text-sm text-gray-200">Total Reviews</p>
                <h3 className="text-3xl font-extrabold">906K</h3>
                <p className="text-sm text-gray-300">
                  46% More Than Last Month
                </p>
              </div>
              <i className="fa-solid fa-star text-4xl"></i>
            </div>

            {/* Active Apps */}
            <div className="flex justify-between items-center  p-5 rounded-lg">
              <div className="text-left">
                <p className="text-sm text-gray-200">Active Apps</p>
                <h3 className="text-3xl font-extrabold">132+</h3>
                <p className="text-sm text-gray-300">31 More Will Launch</p>
              </div>
              <i className="fa-brands fa-google-play text-4xl"></i>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TrustedSection;
