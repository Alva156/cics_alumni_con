import React from "react";
import Navbar from "../../components/user/Navbar";
import Navbar_admin from "../../components/admin/NavbarAdmin";
import Header from "../../components/Header";
import "../../App.css";

const HomepageAdmin = () => {
  return (
    <div>
      <Header />
      <Navbar_admin />
    </div>
  );
};

export default HomepageAdmin;
