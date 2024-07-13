"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SiteGenieLogo from "./sitegenie-logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Check if the user has scrolled down
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white bg-opacity-50 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-200 ${
        isScrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        {" "}
        {/* Reduced padding */}
        <a href="/" className="flex items-center space-x-3">
          <span className="self-center text-black text-4xl">
            {/* Site<span className="text-indigo-600">Genie</span> */}
            <div className="relative w-44 h-16">
              {" "}
              {/* Adjusted width and height */}
              <Image
                src="/sitegenie-logo.png"
                alt="Description of the image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            {/* <SiteGenieLogo /> */}
          </span>
        </a>
        <div className="flex items-center space-x-3 md:space-x-3 rtl:space-x-reverse md:order-2">
          <button className="bg-indigo-50 text-violet-800 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-2 px-4 text-sm hover:bg-indigo-100">
            {" "}
            {/* Reduced padding */}
            <a href="/sign-in"> Login</a>
          </button>
          <button className=" bg-gradient-to-r from-violet-800 to-violet-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-2 px-4 text-sm hover:bg-indigo-700">
            {" "}
            {/* Reduced padding */}
            <a href="/sign-up"> Sign Up</a>
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
