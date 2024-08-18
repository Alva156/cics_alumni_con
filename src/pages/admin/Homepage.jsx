import React from "react";
import Navbar from "../../components/user/Navbar";
import Navbar_admin from "../../components/admin/Navbar_admin";
import Header from "../../components/Header";
import "../../App.css";

const Homepage_admin = () => {
  return (
    <div>
      <Header />
      <Navbar_admin />
    </div>
  );
};

export default Homepage_admin;
