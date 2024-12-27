import React from 'react';
import Image from 'next/image';

const Aboutsection1 = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center max-w-screen-xl mt-20">
        {/* Left Section */}
        <div className="w-full sm:w-1/2 p-5 sm:p-10 flex justify-center sm:justify-center md:justify-start">
          <Image
            src="/pro.png"
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
              About <span className="text-blue-500">Me</span>
            </h2>
          
            <p className="text-gray-700 text-justify">
              Hi,{' '}
              <span className="text-2xl text-blue-500 font-bold">
                I&quot;m Usman Naseem
              </span>{' '}
              I&quot;m passionate about technology&quot;s ability to transform industries, enhance lives, and solve real-world challenges. This platform is dedicated to exploring groundbreaking innovations and sharing insights into advancements that are shaping our futur
              <br />
              <br />
              With a focus on areas like artificial intelligence and sustainable technologies, I aim to highlight cutting-edge solutions that inspire and create meaningful impact. I believe in the power of technology to redefine possibilities and open new doors for progress.
              <br />
              <br />
              Technology is more than just a tool—it&quot;s a driving force that empowers creativity, innovation, and solutions for a better tomorrow
              <br />
              <br />
              It I&quot;m always keen to discuss the latest trends in technology and innovation. Whether through the Contact page or [insert social media links], It&quot;d love to hear your thoughts and collaborate on ideas that push boundaries.
              <br />
              <br />
              Thank you for being part of this journey. Together, we can explore the endless opportunities that technology offers and work towards building a smarter, brighter future
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection1;
