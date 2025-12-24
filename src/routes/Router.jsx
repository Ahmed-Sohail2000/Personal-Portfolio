import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";
import Main from "../layouts/Main";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../components/profile/Profile")); // Or a dedicated About page
const Projects = lazy(() => import("../components/projects/Projects"));
const Profession = lazy(() => import("../components/profession/Profession")); // Services
const Contact = lazy(() => import("../components/contact/Contact"));

const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          ),
        },
       
        {
          path: "projects",
          element: (
            <Suspense fallback={<Loading />}>
              <Projects />
            </Suspense>
          ),
        },
        {
          path: "services",
          element: (
            <Suspense fallback={<Loading />}>
              <Profession />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <div className="text-center p-10">404 - Page Not Found</div>,
        },
      ],
    },
  ],
  { basename: `/${repoName}` }
);
