import Contact from "@/app/component/contact";
import Hero from "@/app/component/Hero";
import LatestArticles from "@/app/component/latest-articles";
import PopularArticles from "@/app/component/popular-articles";

import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <>
   <Navbar bgColor="bg-transparent" color="text-white" />
    <main>
      <Hero />
      <PopularArticles />
      <LatestArticles />
      <Contact />
    </main>
   
    </>
  );
}
