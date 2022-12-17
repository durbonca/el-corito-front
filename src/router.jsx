import { Home, Contact, Post } from "./pages";
import { createBrowserRouter } from "react-router-dom";
import { NavBar, ErrorPage } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/contactanos",
    element: (
      <>
        <NavBar />
        <Contact />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/episodio/:title",
    element: (
      <>
        <NavBar />
        <Post />
      </>
    ),
    errorElement: <ErrorPage />
  }
]);
