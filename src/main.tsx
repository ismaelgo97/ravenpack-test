import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./routes/App";
import Post from "./routes/Post";
import HomeIcon from "@mui/icons-material/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/posts/:postId",
    element: <Post />,
  },
  {
    path: "/users/:userId",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className=" absolute top-0 left-0 right-0 bg-slate-400 h-10 flex items-center text-center">
      <a
        href="/"
        className="pl-4 text-center flex flex-row text-white hover:text-slate-700"
      >
        <HomeIcon />
        <p className="ml-4">Back Home</p>
      </a>
    </div>
    <RouterProvider router={router} />
  </React.StrictMode>
);
