"use client";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa"; // Import FaGithub
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const socialIcons = [
    {
      name: "Linkedin",
      icon: <FaLinkedin size={30} className="text-blue-700"  />, // LinkedIn color
      link: "https://www.linkedin.com/in/your-profile", // Add your LinkedIn URL
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={30} className="text-pink-900" />, // Instagram color
      link: "https://www.instagram.com/your-profile", // Add your Instagram URL
    },
    {
      name: "Facebook",
      icon: <FaFacebook size={30} className="text-blue-700" />, // Facebook color
      link: "https://www.facebook.com/your-profile", // Add your Facebook URL
    },
    {
      name: "Github",
      icon: <FaGithub size={30} className="text-white" />, // GitHub color (you can change it)
      link: "https://github.com/your-profile", // Add your GitHub URL
    },
  ];

  return (
    <footer className="pt-20 mt-10 bg-black">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex flex-col lg:flex-row gap-16 lg:px-0 px-7 divide-y-2 divide-zinc-600 lg:divide-y-0"
        >
          <div className="flex flex-col gap-4 lg:w-[30%]">
            <div className="flex items-center">
              <Image
                src="/blog.png"
                alt="humo-logo"
                height={60}
                width={60}
                className="mt-1"
              />
              <span className="text-2xl font-semibold text-white ml-3">Blog App</span>
            </div>

            <p className="text-slate-500">
              Innovation in Future: Envisioning the potential of groundbreaking ideas to redefine industries, improve lives, and create sustainable progress.
            </p>

            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold text-white">Innovation Sectors</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Artificial Intelligence
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
            Energy Sustainability
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
            BioTech Frontiers
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
            Quantum Computing
            </li>
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold text-white">Tech Enthusiasts</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Developers
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
            Creators
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
            Innovators
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Researchers
            </li>
          </div>

        

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold text-white " > Our Categories</h1>
            <Link href="/">
              <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/blogs">
              <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
                Blog
              </li>
            </Link>
            <Link href="/">
              <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
                Sign / Sign Up
              </li>
            </Link>
            
          </div>

          <div className="flex flex-col gap-4 pt-10 lg:pt-0">
            <h1 className="text-xl font-semibold text-white">Our Services</h1>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
            Skill Development
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Funding Solutions
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
            Tech Consulting
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
            Startup Support
            </li>
          </div>
        </motion.div>


        <div className="flex justify-around pt-16 pb-6 px-7 sm:flex-row flex-col gap-y-2 text-slate-500">

          <div className="flex text-2xl text-white">
          <span className=" flex justify-around font-extrabold ">Blogs</span>
          </div>
          
          
          <p>&copy; 2024 Blog App made by Usman Naseem . All rights reserved.</p>
          <div className="flex gap-2">
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Privacy Policy
            </li>
            <li className="list-none text-slate-500 text-lg font-medium cursor-pointer">
              Terms Of Use
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
}
