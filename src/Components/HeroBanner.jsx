import React from "react";

const HeroBanner = () => {
  return (
    <section className="bg-base-100 text-center py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Build <span className="text-primary">Productive</span> Apps
        </h1>
        <p className="text-gray-500 mb-8">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative
          apps designed to make everyday life simpler, smarter, and more
          exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button className="btn btn-outline btn-primary">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </button>
          <button className="btn btn-outline btn-primary">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="/hero.png"
            alt="Hero"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
