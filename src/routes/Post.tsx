import { useParams } from "react-router-dom";
import { fetchPost } from "../utils/posts";
import { useEffect, useState } from "react";
import { Post, User } from "../utils/types";
import PostData from "../components/PostData";
import { fetchUser } from "../utils/users";
import { CircularProgress } from "@mui/material";

function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState<Post>();
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchPost(Number(postId)).then((post) => {
      setPost(post);
      fetchUser(Number(post.userId)).then((user) => setUser(user));
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading || !post ? (
        <CircularProgress />
      ) : Object.keys(post).length ? (
        <PostData post={post} user={user} />
      ) : (
        <>
          <h1 className="mb-10">ERROR 404</h1>
          <h2>The post you are looking for does not exist.</h2>
        </>
      )}
    </>
  );
}

export default Post;
