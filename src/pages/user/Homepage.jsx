import React from "react";
import Navbar from "../../components/user/Navbar";
import Navbar_admin from "../../components/admin/Navbar_admin";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../App.css";

const Homepage = () => {
  return (
    <div>
      <Header />

      <Navbar />
      <Footer />
    </div>
  );
};

export default Homepage;
