"use client";
import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import SearchResult from "@/app/component/Search";
import {motion} from "framer-motion"

export default function Hero() {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);
  return (
    <>
      <section className="relative w-full h-screen pt-10">
        <div className="absolute inset-0">
          <Image
            src="/ai.webp"
            alt="Agriculture background"
            height={1000}
            width={1000}
            quality={100}
            priority
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-30" />
        </div>
        <motion.div 
        initial={{ opacity: 0 , y:-20}}
        animate={{opacity:1 , y:1}}
        transition={{ duration: 2,}}
        
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-relaxed">

          Empowering with Cutting-Edge <br /> Technology and Innovation
         
          </h1>
          <p className="text-lg md:text-xl mb-8">
          Empowering the future with groundbreaking solutions in technology and open-source development.
          </p>

          <div className="flex flex-col absolute top-[80%] mx-10">
            <div className="flex items-center  mx-auto bg-white rounded-full p-2  shadow-md ">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 px-4 py-2 text-gray-800 rounded-l-full focus:outline-none "
              />
              <button className="flex items-center px-4 py-2  text-black bg-blue-400 rounded-full font-semibold hover:bg-orange-500 hover:text-white">
                <Search className="w-5 h-5 " />
              </button>
            </div>
            <SearchResult searchValue={searchValue} />
          </div>
        </motion.div>
      </section>
    </>
  );
}
