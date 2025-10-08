import React from "react";

const HeroBanner = () => {
  return (
    <section className="bg-base-100 text-center py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Build <span className="text-primary">Productive</span> Apps
        </h1>
        <p className="text-gray-500 mb-8">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition">
            <img src="/google.PNG" alt="Google Play" className="h-6" />
            <span className="font-medium text-gray-800">Google Play</span>
          </button>
          <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition">
            <img src="/app.PNG" alt="App Store" className="h-6" />
            <span className="font-medium text-gray-800">App Store</span>
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="Hero"
            className="rounded-2xl w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
