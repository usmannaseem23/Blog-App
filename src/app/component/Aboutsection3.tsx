import React from 'react';
import Image from 'next/image';

const Aboutsection3 = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mt-20 px-11">
        {/* Left Section */}
        <div className="w-full sm:w-1/2 p-5 sm:p-10 flex justify-center sm:justify-center md:justify-start">
          <Image
            src="/about3.jpg"
            alt="about image"
            width={600}
            height={600}
            layout="intrinsic" // or 'responsive'
            className="cursor-pointer"
          />
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 p-5 text-center sm:text-left">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              What{' '}
              <span className="text-blue-500 font-bold text-4xl sm:text-6xl">
                You&quot;ll Find Here
              </span>
            </h2>
            <p className="text-gray-700 text-justify">
              <strong>Emerging Technologies:</strong> Insights into the latest tech trends and innovations shaping the future.
              <br />
              <strong>Tech Tutorials:</strong> Easy-to-understand guides on implementing new technologies in real-world applications.
              <br />
              <strong>Startup Stories:</strong> Inspiring journeys of tech entrepreneurs revolutionizing industries with their ideas.
              <br />
              <strong>Tech Solutions:</strong> Practical advice on how technology can be leveraged to solve everyday problems.
              <br />
              <strong>AI & Automation:</strong> Exploring how artificial intelligence is transforming businesses and daily life.
              <br />
              <br />
              Whether you&quot;re a tech enthusiast, developer, or entrepreneur, this blog is designed to help you stay informed and inspired by the ever-evolving world of innovation in technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection3;
