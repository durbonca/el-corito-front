import { Home, Contact, Post } from "./pages";
import { getPostByTitle } from "./api/posts";
/* import { createRoot } from "react-dom/client"; */
import { createBrowserRouter /* Route, Link */ } from "react-router-dom";
import { NavBar } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    )
  },
  {
    path: "/contactanos",
    element: (
      <>
        <NavBar />
        <Contact />
      </>
    )
  },
  {
    path: "/episodio/:title",
    element: (
      <>
        <NavBar />
        <Post />
      </>
    )
  }
]);
