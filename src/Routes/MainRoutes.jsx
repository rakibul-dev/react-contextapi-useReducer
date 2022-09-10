import React from "react";
import { useRoutes } from "react-router-dom";

import CustomerLayout from "../Layouts/CustomerLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import TodoPage from "../Pages/TodoPage";

const MainRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <CustomerLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/todo", element: <TodoPage /> },
      ],
    },
    { path: "*", element: <ErrorPage /> },
  ]);
};

export default MainRoutes;
