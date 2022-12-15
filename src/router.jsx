import { Home, Contact } from "./pages";
/* import { createRoot } from "react-dom/client"; */
import { createBrowserRouter /* Route, Link */ } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contactanos",
    element: <Contact />
  }
]);
