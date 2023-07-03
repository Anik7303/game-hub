import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import GameDetails from "./pages/GameDetails";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "games/:slug", element: <GameDetails /> },
    ],
  },
]);

export default router;
