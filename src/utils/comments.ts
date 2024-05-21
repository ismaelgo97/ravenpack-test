import { Comment } from "./types";

export const fetchAllComments = (): Promise<Comment[]> => {
  return fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const fetchComment = (commentId: number): Promise<Comment> => {
  return fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const fetchCommentsByPost = (postId: number): Promise<Comment[]> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};
