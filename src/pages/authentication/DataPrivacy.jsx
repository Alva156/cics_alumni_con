import React from "react";
import Header from "../../components/Header";

function DataPrivacy() {
  return (
    <>
      <Header />

      <div className="text-black font-bold mx-4 md:mx-8 lg:mx-16 mt-8 mb-12">
        <h1 className="text-2xl mb-4 mt-4">Data Policy Agreement</h1>
        <div className="text-base font-normal bg-[#D9D9D9] mb-4 p-6 leading-loose">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="check1"
              className="mr-2"
              style={{ width: "1rem", height: "1rem" }}
            />
            <label htmlFor="check1" className="text-base font-normal">
              I have read, understood, and agree to the Privacy Policy of Alumni
              Connect.
            </label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="check2"
              className="mr-2"
              style={{ width: "1rem", height: "1rem" }}
            />
            <label htmlFor="check2" className="text-base font-normal">
              I agree to use of my personal information for educational purposes
              of University.
            </label>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          <div className="">
            <button className="btn md:w-44 w-52 bg-[#D9D9D9] text-black rounded-none transition duration-300 ease-in-out hover:bg-[#A8A8A8]">
              Cancel
            </button>
          </div>
          <div className="">
            <button className="btn md:w-44 w-52 bg-[#056E34] text-white rounded-none transition duration-300 ease-in-out hover:bg-[#004A1C]">
              Agree
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataPrivacy;
