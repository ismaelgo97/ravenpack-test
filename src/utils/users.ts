import { User } from "./types";

export const fetchAllUsers = (): Promise<User[]> => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const fetchUser = (userId: number): Promise<User> => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const fetchUsersByEmail = (email: string): Promise<User[]> => {
  return fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};
