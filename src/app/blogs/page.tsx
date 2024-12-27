
import Link from "next/link"
import { MoveRight } from "lucide-react"
import { Metadata } from "next"
import posts from "@/app/post-details/data.json"
import Image from "next/image"
import { Card } from "@/app/component/ui/Cards"
import BlogAnimation from "@/app/component/animations/BlogAnimation"
export const metadata:Metadata ={
    title:"FutureForge | Blog"
}

export default function Blog() {
    return (
      <>
        <div className="pt-20 w-full bg-slate-100">
            <div className="max-w-screen-xl mx-auto py-10 md:px-2 px-6"> 
                <h1 className="text-center text-5xl font-semibold">Our Latest Blog</h1>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 cursor-pointer pt-10">
                   {posts.map((post , index)=>(
                    <BlogAnimation key={index}> 
                    <Card className="hover:scale-105 h-[600px] duration-200 pb-3 rounded-2xl shadow-lg" >
                    <Image
                      src={post.src}
                      alt={post.tittle}
                      height={400}
                      loading="lazy"
                      width={400}
                      className="w-full h-[65%] mb-4 rounded-t-2xl"
                    />
                    <p className="m-4 text-slate-500">
                      <span>October</span> <span>23, 2024</span>
                    </p>
                    <h1 className="m-4 text-2xl font-semibold">{post.tittle}</h1>
                    <Link href={`/blog/${post.id}`} className="flex items-center gap-1">
                    <p className="ml-4 text-blue-500 hover:text-blue-700 text-xl">Read More</p>
                    <MoveRight className="text-blue-500"/>
                    </Link>
                  </Card>
                  </BlogAnimation>
                   ))}
                </div>
            </div>
        </div>
        </>
    )
}