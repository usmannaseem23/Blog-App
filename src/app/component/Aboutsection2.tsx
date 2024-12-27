import React from 'react';
import Image from 'next/image';

const Aboutsection2 = () => {
  return (
    <div>
      <section className="px-5 sm:px-10 pt-16 sm:pt-32 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-5">
          {/* Left Side - Content */}
          <div className="order-2 md:order-1 flex flex-col justify-center text-center sm:text-left px-5 sm:px-10">
            <p className="text-3xl sm:text-4xl font-bold md:text-5xl lg:text-7xl text-black">
              Why{' '}
              <span className="text-blue-400">
                I Started This Blog
              </span>.
            </p>
            <p className="mt-4 text-gray-700 text-justify text-sm sm:text-base lg:text-lg">
              The journey to{' '}
              <span className="text-black text-lg font-bold">
               Blog App
          
              </span>{' '}
              has always fascinated me. From a young age, I&quot;ve been captivated by how new advancements and digital solutions are reshaping our lives and industries. 
              <br />
              <br />
              However, the path to understanding and adopting these technologies hasn&quot;t always been clear. There have been challenges in staying updated with the fast pace of innovation and understanding its true impact.
              <br />
              <br />
              But with every challenge came an opportunity to learn and adapt. I realized that embracing technology isn&quot;t about knowing everything—it&quot;s about staying curious, being open to change, and continuously evolving with the tech landscape. This inspired me to create this blog to share insights on emerging technologies, trends, and innovations that are transforming our world.
              <br />
              <br />
              Through this platform, I aim to break down complex topics, simplify trends, and provide practical guidance for those interested in harnessing the power of technology to drive change, solve problems, and create new possibilities.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="/about2.jpg"
              alt="about image"
              width={700}
              height={700}
              layout="intrinsic"
              className="cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutsection2;
