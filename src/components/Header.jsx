import React, { useState } from "react";
import logo from "../assets/mainLogo.png"
import { useMovieContext } from "../Redux/useContext";
import {debounce}  from "lodash"
import { logoutUser } from "../Redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

const Header = () => {

  const {setSearchQuery} = useMovieContext();
  const [searchInput,setSearchInput] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const debounceSearch = debounce(setSearchQuery,300)

  const handleSearch = (e)=>{
    const query = e.target.value
    setSearchInput(query)
    debounceSearch(query.toLowerCase())
  }

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
      backdrop: "rgba(0,0,0,0.9)",
      customClass: {
        container: "custom-swal-container",
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        text: "custom-swal-text",
        confirmButton: "custom-swal-confirm-button",
        cancelButton: "custom-swal-cancel-button",
        backdrop: "rgba(0,0,0,0.9)",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutUser());
        navigate("/");
      }
    });
  };

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
          value={searchInput}
          onChange={handleSearch}
        />
      </div>

      {/* Navigation */}
      <nav className="flex justify-center items-center md:justify-end mt-4 md:mt-0">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">About Us</a></li>
          <li><a href="#" className="text-white">Contact Us</a></li>
          <li><button onClick={handleLogout} className="px-4 bg-transparent  text-white rounded-lg">Log Out</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
