import React from "react";
import Navbar from "../../components/user/Navbar";
import Navbar_admin from "../../components/admin/NavbarAdmin";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import homepage1 from "../../assets/homepage1.jpg";
import homepage2 from "../../assets/homepage2.png";
import "../../App.css";

const Homepage = () => {
  return (
    <div>
      <div className="relative bg-white m-6 max-w-full">
        <img
          src={homepage1}
          alt="Homepage1"
          className="w-full object-cover h-40 sm:h-60 md:h-72 lg:h-96 xl:h-128 2xl:h-130"
        />
        <div className="absolute inset-0 bg-red-500 opacity-30"></div>
      </div>
      <div className="relative bg-white m-6 max-w-full">
        <img
          src={homepage2}
          alt="Homepage2"
          className="w-full object-cover h-40 sm:h-60 md:h-72 lg:h-96 xl:h-128 2xl:h-130"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
          <button
            onClick={() => (window.location.href = "/user-userprofile")}
            className="homepage-text tracking-extra-wide font-light  hover:bg-[#2D2B2B] w-52 h-8 bg-[#2D2B2B] text-white rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
          >
            USER PROFILE
          </button>
        </div>
      </div>

      <div className="relative bg-white m-6 max-w-full">
        <img
          src={homepage2}
          alt="Homepage2"
          className="w-full object-cover h-40 sm:h-60 md:h-72 lg:h-96 xl:h-128 2xl:h-130"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
          <button
            onClick={() => (window.location.href = "/user-survey")}
            className="homepage-text tracking-extra-wide font-light  hover:bg-[#2D2B2B] w-52 h-8 bg-[#2D2B2B] text-white rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
          >
            SURVEY
          </button>
        </div>
      </div>
      <div className="relative bg-white m-6 max-w-full">
        <img
          src={homepage2}
          alt="Homepage2"
          className="w-full object-cover h-40 sm:h-60 md:h-72 lg:h-96 xl:h-128 2xl:h-130"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
          <button
            onClick={() => (window.location.href = "/user-threads")}
            className="homepage-text tracking-extra-wide font-light  hover:bg-[#2D2B2B] w-52 h-8 bg-[#2D2B2B] text-white rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
          >
            THREADS
          </button>
        </div>
      </div>
      <div className="relative bg-white m-6 max-w-full">
        <img
          src={homepage2}
          alt="Homepage2"
          className="w-full object-cover h-40 sm:h-60 md:h-72 lg:h-96 xl:h-128 2xl:h-130"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4 pt-8">
          <div className="flex justify-between space-x-2">
            <button
              onClick={() => (window.location.href = "/user-companies")}
              className="homepage-text tracking-extra-wide font-light hover:bg-[#2D2B2B] text-[0.7rem] w-36 h-8 bg-[#2D2B2B] text-white rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
            >
              Companies
            </button>
            <button
              onClick={() => (window.location.href = "/user-news")}
              className="homepage-text tracking-extra-wide font-light hover:bg-[#2D2B2B] text-[0.7rem] w-36 h-8 bg-[#2D2B2B] text-white rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
            >
              News
            </button>
          </div>
          <div className="flex justify-between space-x-4">
            <button
              onClick={() => (window.location.href = "/user-events")}
              className="homepage-text tracking-extra-wide font-light hover:bg-[#2D2B2B] text-[0.7rem] w-36 h-8 bg-[#2D2B2B] text-white rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
            >
              Events
            </button>
            <button
              onClick={() => (window.location.href = "/user-certifications")}
              className="homepage-text tracking-extra-wide font-light hover:bg-[#2D2B2B]  text-[0.6rem] w-36 h-8 bg-[#2D2B2B] text-white rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
            >
              Certifications
            </button>
          </div>
          <div className="flex justify-between space-x-4">
            <button
              onClick={() => (window.location.href = "/user-documentrequest")}
              className="homepage-text tracking-extra-wide font-light hover:bg-[#2D2B2B] text-[0.7rem] w-36 h-8 bg-[#2D2B2B] text-white rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
            >
              Documents
            </button>
            <button
              onClick={() => (window.location.href = "/user-job")}
              className="homepage-text tracking-extra-wide font-light hover:bg-[#2D2B2B] text-[0.57rem] w-36 h-8 bg-[#2D2B2B] text-white rounded  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
            >
              Job/Internship
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-white m-6 max-w-full">
        <img
          src={homepage2}
          alt="Homepage2"
          className="w-full object-cover h-40 sm:h-60 md:h-72 lg:h-96 xl:h-128 2xl:h-130"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
          <button
            onClick={() => (window.location.href = "/user-alumni")}
            className="homepage-text tracking-extra-wide font-light  hover:bg-[#2D2B2B] w-52 h-8 bg-[#2D2B2B] text-white rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
          >
            ALUMNI
          </button>
        </div>
      </div>
      <div className="relative bg-white m-6 max-w-full">
        <img
          src={homepage2}
          alt="Homepage2"
          className="w-full object-cover h-40 sm:h-60 md:h-72 lg:h-96 xl:h-128 2xl:h-130"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
          <button
            onClick={() => (window.location.href = "/user-chatbot")}
            className="homepage-text tracking-extra-wide font-light  hover:bg-[#2D2B2B] w-52 h-8 bg-[#2D2B2B] text-white rounded btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-32 sm:w-60 md:w-64 lg:w-96"
          >
            CHATBOT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
