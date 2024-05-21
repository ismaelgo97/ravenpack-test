import { useEffect, useState } from "react";
import "./App.css";
import { Post, User } from "../utils/types";
import { fetchAllPosts, fetchPostsByUser } from "../utils/posts";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, CircularProgress, Pagination } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchUser } from "../utils/users";
import Error from "../components/404Error";

const POSTS_PER_PAGE = 10;

function App() {
  const { userId } = useParams();
  const [user, setUser] = useState<User>();
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [postIndex, setPostsIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchUser(Number(userId)).then((posts) => setUser(posts));
      fetchPostsByUser(Number(userId)).then((posts) => setAllPosts(posts));
    } else {
      fetchAllPosts().then((posts) => setAllPosts(posts));
    }
    setIsLoading(false);
  }, []);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPostsIndex((value - 1) * POSTS_PER_PAGE);
  };

  return isLoading ? (
    <>
      <CircularProgress />
    </>
  ) : Object.keys(allPosts).length ? (
    <>
      <h1 className="text-3xl font-bold mb-10 text-gray-300">
        {user ? user.name : "All Posts"}
      </h1>
      {allPosts
        .slice(postIndex, postIndex + POSTS_PER_PAGE)
        .map((post, index) => (
          <Accordion className="!bg-slate-200">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`content-${index}`}
              id={`header-${index}`}
              className="font-semibold"
            >
              {post.title}
            </AccordionSummary>
            <AccordionDetails>{post.body}</AccordionDetails>
            <AccordionActions>
              <Button href={`/posts/${post.id}`}>Check comments</Button>
            </AccordionActions>
          </Accordion>
        ))}
      {allPosts.length > POSTS_PER_PAGE && (
        <Pagination
          count={Math.ceil(allPosts.length / POSTS_PER_PAGE)}
          onChange={handlePageChange}
          color="primary"
          className="flex justify-center mt-10 [&_.MuiPaginationItem-root]:text-gray-300"
        />
      )}
    </>
  ) : (
    <Error type="user" />
  );
}

export default App;
