import { Metadata } from "next";
import posts from '@/app/post-details/data.json';
import Image from "next/image";
import { Clock4, User, CalendarDays } from "lucide-react";
import { Skeleton } from "@/app/component/ui/skeleton";
import Comments from "@/app/component/Comments";
import BlogAnimation from "@/app/component/animations/BlogAnimation";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  await new Promise((ressolve) => {
    setTimeout(() => {
      ressolve(`${params.id}`);
    }, 100);
  });
  return {
    title: {
      absolute: `FutureForge | Blog ${params.id}`,
    },
  };
};

export default function AllBlog({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = posts.find((p) => p.id === id);

  if (!post) return <Skeleton />;
  return (
    <div className="pt-20 w-full">
      <div className="max-w-screen-md mx-auto py-20 px-10">
        <BlogAnimation>
          <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold">{post.tittle}</h1>
          <div className="my-6 text-slate-600 flex flex-col sm:flex-row gap-6">
            <div className="flex gap-2">
              <User />
              <span>{post.author}</span>
            </div>
            <div className="flex gap-2">
              <CalendarDays />
              <span>11/3/24</span>
            </div>
            <div className="flex gap-2">
              <Clock4 />
              <span>2 min read</span>
            </div>
          </div>
        </BlogAnimation>
        <BlogAnimation>
          <Image
            src={post.src}
            alt={post.tittle}
            height={2000}
            loading="lazy"
            width={2000}
            objectFit="cover"
            objectPosition="center"
            className="w-full  rounded-lg object-cover my-4"
          />

          <BlogAnimation>
            <p className="text-2xl leading-relaxed py-10">{post.content}</p>
          </BlogAnimation>
        </BlogAnimation>
        <BlogAnimation>
          <div className="mt-20">
          <Comments blogId={post.id} />
          </div>
        </BlogAnimation>
      </div>
    </div>
  );
}
