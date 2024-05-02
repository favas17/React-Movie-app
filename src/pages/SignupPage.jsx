import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../components/Button";
import {useDispatch} from "react-redux";
import { saveUserDetails } from "../Redux/reducers/userReducer";

function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const dispatch = useDispatch();

  
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(formData.name.trim() === "" || formData.email.trim() === "" || formData.password.trim() === "" || formData.confirm_password.trim() === ""){
      console.log("Please fill the empty fields");
      return;
    }

    if(formData.password !== formData.confirm_password){
      console.log("Password not match");
      return;
    }

      // retrieve the exsting data from the local storage
      const existUser = localStorage.getItem("users");
      let usersArray = [];
// if the esisting user data esist then add it into an array
      if(existUser){
        usersArray = JSON.parse(existUser)
      }

      // add the new user to the array
      usersArray.push(formData)

      // save the updated user data array to local storage
      localStorage.setItem("users",JSON.stringify(usersArray));
      console.log("user sigend in", formData)
  };
  
  // dispatch action to save user details in redux state
  dispatch(saveUserDetails(formData));



  return (
    <section className="w-full h-screen flex">
      {/* Left Part - Brief Overview */}
      <div className="w-full bg-cover bg-image items-center justify-center flex flex-col">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold"> Movies</h2>
          <p className="mt-4 text-3xl font-bold">Welcome! This is a movie streaming platform</p>
        </div>
      
      
      {/* Right Part - Signup Form */}
      <div className="relative   md:w-2/5  flex items-center justify-center ">

      <div className="absolute inset-0 bg-black opacity-50 blur-md"></div>

      <div className="relative z-10 flex flex-col justify-evenly w-full h-full items-center border-[#6aadaf] border-4 rounded-lg bg-opacity-50 bg-gray-800 p-8">

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-evenly w-full h-full items-center" >
            
          <div className="form-field">
            <input
              className="input-field"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your username"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <input
              className="input-field"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="form-field">
            <input
              className="input-field"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <input
              className="input-field"
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm your password"
              value={formData.confirm_password}
              onChange={handleChange}
            />
          </div>

          <p className="text-white">Forgot password?</p>

          <div className="btns w-full flex justify-evenly">
            <AuthButton
              label="Sign Up"
              className="sig-btn border-none w-24 bg-[#687c78] rounded-md"
              onClick={handleSubmit}
            />
            <Link to="/"><AuthButton
              label="Log In"
              className="log-btn border-none transpa w-24 bg-[#687c78] rounded-md"
            /></Link>
          </div>
        </form>
        </div>
      </div>
      </div>
    </section>
  );
}

export default SignupPage;
