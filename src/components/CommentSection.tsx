import { Comment } from "../utils/types";

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
  return (
    <div className="rounded bg-slate-400 p-4">
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4 text-left">
          <p className="font-bold">{comment.email}:</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
