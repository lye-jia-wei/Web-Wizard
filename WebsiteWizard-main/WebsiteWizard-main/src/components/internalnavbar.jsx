import React from "react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const InternalNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const signOut = () => {
    // Add sign out logic here
    console.log("User signed out");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
      style={{ height: "60px" }} // Reduced height
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2"> {/* Reduced padding */}
        <a href="/user-dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="relative w-36 h-12"> {/* Adjusted width and height */}
            <Image
              src="/sitegenie-logo.png"
              alt="SiteGenie Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
         </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ml-auto ">
          <div className="hidden sm:ml-6 sm:flex sm:items-center border-4 rounded-full">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default InternalNavbar;
