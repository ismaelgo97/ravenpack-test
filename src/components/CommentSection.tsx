import { Comment } from "../utils/types";

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
  return (
    <div className="rounded bg-slate-500 p-2 pr-4 pt-8 relative">
      <p className="absolute top-0 left-0 ml-4 mt-1 font-semibold">Comments:</p>
      <div className="rounded bg-slate-400 p-4">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4 text-left">
            <p className="font-bold">{comment.email}:</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
