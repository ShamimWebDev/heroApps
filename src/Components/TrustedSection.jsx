import React, { Component } from "react";

class TrustedSection extends Component {
  render() {
    return (
      <div>
        {/* Trusted Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-16 px-6 -mt-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Trusted By Millions, Built For You
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-4xl font-extrabold">29.6M</h3>
                <p className="text-sm text-gray-200 mb-2">Total Downloads</p>
                <p className="text-sm text-gray-300">
                  21% More Than Last Month
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold">906K</h3>
                <p className="text-sm text-gray-200 mb-2">Total Reviews</p>
                <p className="text-sm text-gray-300">
                  46% More Than Last Month
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold">132+</h3>
                <p className="text-sm text-gray-200 mb-2">Active Apps</p>
                <p className="text-sm text-gray-300">31 More Will Launch</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TrustedSection;
