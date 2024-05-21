import { useEffect, useState } from "react";
import { Post, User, Comment } from "../utils/types";
import { fetchCommentsByPost } from "../utils/comments";
import CommentSection from "./CommentSection";

interface PostDataProps {
  post: Post;
  user?: User;
}

const PostData = ({ post, user }: PostDataProps) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetchCommentsByPost(post.id).then((comments) => setComments(comments));
  }, [post]);

  return (
    <>
      <div className="rounded bg-gray-700 p-4 mb-20">
        <div className="flex justify-start mb-6">
          <p>
            {post.title}
            {" - "}
            <span className="font-bold">
              {user ? (
                <a href={`/users/${user?.id}`}>{user?.name}</a>
              ) : (
                "Unknown User"
              )}
            </span>
          </p>
        </div>
        <div>
          <p>{post.body}</p>
        </div>
      </div>
      {comments.length && <CommentSection comments={comments} />}
    </>
  );
};

export default PostData;
