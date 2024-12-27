"use client";
import posts from "@/app/post-details/data.json";
import { Search } from "lucide-react";
import Link from "next/link";

import { useEffect, useState } from "react";

type PropType = {
  searchValue: string;
};

type Post = {
  id: string;
  tittle: string;
  author: string;
  content: string;
  src: string;
};

export default function SearchResult({ searchValue }: PropType) {
  const [results, setResult] = useState<Post[]>([]);

  useEffect(() => {
    const filteredPost = posts.filter((post) =>
      post.tittle.toLowerCase().includes(searchValue.toLowerCase())
    );
    setResult(filteredPost);
  }, [searchValue]);

  return (
    <div className="bg-white w-full mt-2 rounded-lg shadow-md">
      {searchValue && (
        <div className="flex flex-col">
          {results.map((result , index) => (
            
            <Link
            key={index}
              href={`/blog/${result.id}`}
              className="my-2 text-zinc-950  px-2 sm:px-4 py-2 text-start hover:bg-zinc-100 cursor-pointer transition-colors"
            >
              <p className="flex gap-x-2 text-[80%] sm:text-[95%]">
             <Search className="w-4 h-4" />
              {result.tittle}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
