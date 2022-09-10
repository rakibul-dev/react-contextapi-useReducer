import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/CustomerComponents/Header/Header";
import Footer from "../Components/CustomerComponents/Footer/Footer";
const CustomerLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default CustomerLayout;
