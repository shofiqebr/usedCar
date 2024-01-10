import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";

import Home from './../pages/home/Home';
import ErrorPage from "../pages/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ]
  },
]);