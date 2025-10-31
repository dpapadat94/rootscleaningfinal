import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Organize from "./Pages/Organize.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Book from "./Pages/Book.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
      { path: "organize", element: <Organize /> },
      { path: "book", element: <Book /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
