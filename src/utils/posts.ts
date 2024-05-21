// File to fetch posts

import { Post } from "./types";

export const fetchAllPosts = (): Promise<Post[]> => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const fetchPost = (postId: number): Promise<Post> => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const fetchPostsByUser = (userId: number): Promise<Post[]> => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};
