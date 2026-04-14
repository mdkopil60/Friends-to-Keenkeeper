import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import NotFound from "../pages/NotFound";
import FriendDetails from "../pages/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path:"/friend/:id",
        element: <FriendDetails></FriendDetails>

      },
      {
        path: '/timelines',
        element: <Timeline></Timeline>,
      },
      {
        path: '/stats',
        element: <Stats></Stats>,
      },
    ],
    errorElement: <NotFound></NotFound>
  },
]);