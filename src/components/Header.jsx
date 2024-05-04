import React from "react";
import logo from "../assets/mainLogo.png"

const Header = () => {
  return (
    <header className="bg-black w-full text-white p-4 flex flex-col md:flex-row  justify-between items-center ">
      {/* Logo */}
      <div className="flex  items-center md:justify-start">
        <img className="h-20 w-20  "  src={logo} alt="Logo" />
        <h1 className="text-lg font-bold pb-3">Movie streaming</h1>
      </div>

      {/* Search bar */}
      <div className="flex items-center w-full md:w-96 mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 w-full bg-[#232323] rounded-lg text-white focus:outline-none"
        />
      </div>

      {/* Navigation */}
      <nav className="flex justify-center items-center md:justify-end mt-4 md:mt-0">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">About Us</a></li>
          <li><a href="#" className="text-white">Contact Us</a></li>
          <li><button className="px-4 bg-transparent  text-white rounded-lg">Log Out</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
