"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="bg-blue-600 p-4">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Logo */}
            <div className="flex-1 flex items-center justify-center sm:justify-start">
              <div className="flex-shrink-0 text-white font-bold text-xl">
                My Logo
              </div>
            </div>
            {/* Desktop Navigation Links */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-white px-3 py-2 rounded-md text-lg hover:bg-blue-500"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-white px-3 py-2 rounded-md text-lg hover:bg-blue-500"
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="text-white px-3 py-2 rounded-md text-lg hover:bg-blue-500"
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  className="text-white px-3 py-2 rounded-md text-lg hover:bg-blue-500"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue-600 p-4">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              className="text-white px-3 py-2 rounded-md text-lg hover:bg-blue-500"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-white px-3 py-2 rounded-md text-lg hover:bg-blue-500"
            >
              About
            </Link>

            <Link
              href="/services"
              className="text-white px-3 py-2 rounded-md text-lg hover:bg-blue-500"
            >
              Services
            </Link>

            <Link
              href="/contact"
              className="text-white px-3 py-2 rounded-md text-lg hover:bg-blue-500"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
