"use client";
import { useState, useEffect, FC } from "react";
import { User} from "lucide-react";

interface CommentsProps {
  blogId: string;
}

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
}

const Comments: FC<CommentsProps> = ({ blogId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>(""); 
  const [newComment, setNewComment] = useState<string>(""); 

  useEffect(() => {
    const savedComments = JSON.parse(
      localStorage.getItem(`comments_${blogId}`) || "[]"
    ) as Comment[];
    setComments(savedComments);
  }, [blogId]);

  const handleAddComment = () => {
    if (name.trim() && newComment.trim()) {
      const currentDate = new Date().toLocaleDateString();
      const dateId = Date.now().toString();
      const updatedComments = [
        ...comments,
        { name: name, text: newComment, date: currentDate, id: dateId },
      ];
      setComments(updatedComments);
      localStorage.setItem(
        `comments_${blogId}`,
        JSON.stringify(updatedComments)
      );
      setName("");
      setNewComment("");
    }
  };

  return (
    <div className="flex flex-col pb-10 gap-4 max-w-screen-xl mx-auto">
      <h3 className="text-3xl font-semibold">Comments</h3>

      <input
        type="text"
        className="py-2 px-4 border-[2px]"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        className="py-2 px-4 border-[2px]"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />

      <button
        className="bg-zinc-800 text-white w-36 py-2 px-4 rounded-xl border-none outline-none hover:bg-zinc-700 active:bg-zinc-800"
        onClick={handleAddComment}
      >
        Add Comment
      </button>

      <div>
        {comments.map((comment) => (
          <div
            className="bg-slate-100 flex flex-col gap-y-4 px-6 py-4 rounded-xl mt-4"
            key={comment.id}
          >
            <div className="flex justify-between">
              <p className="flex text-xl gap-x-2 font-semibold">
                <User />
                {comment.name}
              </p>
              <p>{comment.date}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xl">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
