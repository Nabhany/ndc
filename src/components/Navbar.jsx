import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="text-black bg-white flex flex-row gap-32 items-center mx-24">
        <img src={Logo} alt="logo" />
        <ul className="md:flex hidden items-center gap-8">
          <li className="text-lg font-bold w-24 shrink-0 ">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg font-bold text-[#8b8989] w-24 shrink-0">
            <Link to="about">
              <a href="About" className=" font-bold leading-none">
                About
              </a>
            </Link>
          </li>
          <li className="text-lg font-bold text-[#8b8989] w-[110px] shrink-0">
          <Link to="events">
              <a href="events" className=" font-bold leading-none">
                Events
              </a>
            </Link>
          </li>
          <li className="text-lg font-bold text-[#8b8989] w-32 shrink-0">
          <Link to="sponsors">
              <a href="sponsors" className=" font-bold leading-none">
                Sponsors
              </a>
            </Link>
          </li>
          <li className="text-lg font-bold text-[#8b8989] w-32 shrink-0">
          <Link to="gallery">
              <a href="gallery" className=" font-bold leading-none">
                Gallery
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
