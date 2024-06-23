import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiX } from "react-icons/bi";
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-300 drop-shadow-lg sticky top-0  ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl cursor-default">
            BRAND.
          </h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-200} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-50} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platforms" smooth={true} offset={-100} duration={500}>
                Platforms
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-indigo-600 text-black bg-transparent mr-4 px-8 py-3">
            Sign up
          </button>
          <button className="px-8 py-3">Login</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClose}>
          {!nav ? (
            <GiHamburgerMenu className="text-[20px]" />
          ) : (
            <BiX className="text-[35px]" />
          )}
        </div>
      </div>
      <ul
        className={`transition-all md:hidden duration-500 ease-in-out ${
          !nav
            ? "max-h-0 opacity-0 overflow-hidden"
            : "max-h-screen opacity-100"
        } absolute bg-zinc-300 w-full px-8`}
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="pricing"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="border-indigo-600 text-black bg-transparent px-8 py-3 mb-4">
            Sign up
          </button>
          <button className="px-8 py-3">Login</button>
        </div>
      </ul>
    </div>
  );
};
