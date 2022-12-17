import { Home, Contact, Post } from "./pages";
/* import { createRoot } from "react-dom/client"; */
import { createBrowserRouter /* Route, Link */ } from "react-router-dom";
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
