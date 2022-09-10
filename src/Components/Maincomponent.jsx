import React from "react";
import Header from "./CustomerComponents/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./CustomerComponents/Footer/Footer";
import MainRoutes from "../Routes/MainRoutes";

const Maincomponent = () => {
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default Maincomponent;
