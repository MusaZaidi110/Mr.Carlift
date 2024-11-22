import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Layout from "./Pages/Layout.jsx";
import JoinAsPassenger from "./Pages/joinAsPassenger.jsx";
import JoinAsDriver from "./Pages/joinAsDriver.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/join-as-passenger",
    element: (
      <Layout>
        <JoinAsPassenger />
      </Layout>
    ),
  },
  {
    path: "/join-as-driver",
    element: (
      <Layout>
        <JoinAsDriver />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
