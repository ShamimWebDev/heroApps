import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import ErrorApp from "../Pages/ErrorApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <MainLayout>
        <ErrorPage />
      </MainLayout>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/apps", element: <Apps /> },
      { path: "/installation", element: <Installation /> },
      { path: "/app/:id", element: <AppDetails /> },
      { path: "app", element: <ErrorApp /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "/errorapp",
    element: (
      <MainLayout>
        <ErrorApp />
      </MainLayout>
    ),
  },
]);

export default router;
