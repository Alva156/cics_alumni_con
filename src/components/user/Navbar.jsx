import React, { useState } from "react";
import "../../App.css";
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="navbar bg-white text-black font-light ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white z-[1] mt-3 w-72 p-2 shadow "
              >
                <li className="p-2.5 border-b border-hgray last:border-b-0">
                  <a href="/">Home</a>
                </li>
                <li className="p-2.5 border-b border-hgray last:border-b-0">
                  <a href="/user-userprofile">User Profile</a>
                </li>
                <li className="p-2.5 border-b border-hgray last:border-b-0">
                  <a href="/user-survey">Survey</a>
                </li>
                <li className="p-2.5 border-b border-hgray last:border-b-0">
                  <a href="/user-threads">Threads</a>
                </li>
                <li className="p-2.5 border-b border-hgray last:border-b-0">
                  <details>
                    <summary>Contents</summary>
                    <ul className="p-2.5">
                      <li className="p-1">
                        <a href="/user-companies">Companies</a>
                      </li>
                      <li className="p-1">
                        <a href="/user-news">News</a>
                      </li>
                      <li className="p-1">
                        <a href="/user-events">Events</a>
                      </li>
                      <li className="p-1">
                        <a href="/user-certifications">Certifications</a>
                      </li>
                      <li className="p-1">
                        <a href="/user-documentrequest">Document Request Steps</a>
                      </li>
                      <li className="p-1">
                        <a href="/user-job">Job/Internship Referrals</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="p-2.5 border-b border-hgray last:border-b-0">
                  <a href="/user-alumni">Alumni</a>
                </li>
                <li className="p-2.5 ">
                  <a href="/user-chatbot">Chatbot</a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex py-1">
          <ul className="menu menu-horizontal px-1 ">
            <li className="px-2.5 pr-8 ">
              <a href="/">Home</a>
            </li>
            <li className="px-2.5 pr-8">
              <a href="/user-userprofile">User Profile</a>
            </li>
            <li className="px-2.5 pr-8">
              <a href="/user-survey">Survey</a>
            </li>
            <li className="px-2.5 pr-8">
              <a href="/user-threads">Threads</a>
            </li>
            <li className="px-2.5 pr-8">
              <details>
                <summary>Contents</summary>
                <ul className="px-2.5 bg-white pr-8">
                  <li className="p-1 border-b border-hgray last:border-b-0">
                    <a href="/user-companies">Companies</a>
                  </li>
                  <li className="px-1 border-b border-hgray last:border-b-0">
                    <a href="/user-news">News</a>
                  </li>
                  <li className="px-1 border-b border-hgray last:border-b-0">
                    <a href="/user-events">Events</a>
                  </li>
                  <li className="px-1 border-b border-hgray last:border-b-0">
                    <a href="/user-certifications">Certifications</a>
                  </li>
                  <li className="px-1 border-b border-hgray last:border-b-0">
                    <a href="/user-documentrequest">Document Request Steps</a>
                  </li>
                  <li className="px-1 border-b border-hgray last:border-b-0">
                    <a href="/user-job">Job/Internship Referrals</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="px-2.5 pr-8">
              <a href="/user-alumni">Alumni</a>
            </li>
            <li className="px-2.5 ">
              <a href="/user-chatbot">Chatbot</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost px-5 flex items-center gap-2 ">
            <MdOutlineLogout size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
