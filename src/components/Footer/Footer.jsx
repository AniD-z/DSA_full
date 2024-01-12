import React from "react";
// import { FaInstagram } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className=" ">
      <div className="md:w-full mx-auto p-4 text-white">
        <div className="sm:flex items-center  sm:items-center sm:justify-evenly ">
          <a
            href="#"
            className="flex flex-wrap justify-center items-center mb-4 sm:mb-0"
          >
           
            <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white ff-tc uppercase">
              Schema Verse
            </span>
          </a>
          <ul className="flex flex-wrap justify-center  items-center mb-6 text-sm font-medium text-black-500 sm:mb-0 dark:text-black-400">
            <li>
              <a
                href="#About"
                className="mr-4 hover:underline hover:text-white md:mr-6 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Events"
                className="mr-4 hover:underline hover:text-white md:mr-6"
              >
                Levels
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-black-500 md:w-1/3 sm:mb-0 dark:text-black-400 md:justify-evenly w-full">
            <li>
              <a
                href=""
                className="mr-4 hover:underline hover:text-white md:mr-6 flex "
              >
                {/* <div className="outline"> */}
                {/* <FaInstagram className="outline" /> */}
                Instagram
                {/* </div> */}
              </a>
            </li>
            <li>
              <a
                href=""
                className="mr-4 hover:underline hover:text-white md:mr-6"
              >
                {/* <FaLinkedinIn /> */}
                Linkedin
              </a>
            </li>
            <li>
              <a
                href=""
                className="mr-4 hover:underline hover:text-white md:mr-6"
              >
                notmadeyet@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-black-200 sm:mx-auto dark:border-black-700 lg:my-8" />
        <span className="block text-sm text-black-500 text-center ">
          © 2023{" "}
          <a href="" className="hover:underline hover:text-white">
            SV™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
