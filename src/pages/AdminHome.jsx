import React, { useState, useEffect } from "react";
import { useMovieContext } from "../Redux/useContext";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/reducers/userReducer";
import Swal from "sweetalert2"
import { Link } from "react-router-dom";

function AdminHome() {
    const {movies,deleteMovie} = useMovieContext();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = (id)=>{
        deleteMovie(id);
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
        <div className="bg-black text-white w-full h-full  p-6">
            <div className="w-full flex justify-between">
            <h1 className="text-3xl font-bold mb-4">Movie List</h1>
            <button onClick={handleLogout} className="px-4 text-white rounded-lg  ">Log Out</button>
            <Link to={"/AddMovie"}>
                <button  className="px-4 text-white rounded-lg  ">Add Movies</button>
            </Link>

            </div>
            
            <table className="w-full h-screen border-collapse">
                <thead>
                    <tr>
                       <th className="py-2 px-4 border">image</th>
                        <th className="py-2 px-4 border">Title</th>
                        <th className="py-2 px-4 border">Cast</th>
                        <th className="py-2 px-4 border">Description</th>
                        <th className="py-2 px-4 border">Trailer</th>
                        <th className="py-2 px-4 border">Edit</th>
                        <th className="py-2 px-4 border">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id} className="bg-inherit">
                            <td className="py-2 px-4 border w-40">
                                <img src={movie.image} alt={movie.title} 
                                className="h-28 w-28 object-fill "/>
                            </td>
                            <td className="py-2 px-4 border">{movie.title}</td>
                            <td className="py-2 px-4 border">{movie.cast}</td>
                            <td className="py-2 px-4 border">{movie.description}</td>
                            <td className="py-2 px-4 border">{movie.trailer}</td>
                            <td className="py-2 px-4 w-28 border">
                              <Link to={`/EditMovie/${movie.id}`}>  <button className="bg-[#272735] text-white w-20 px-2 py-1 mr-2 rounded-md">Edit</button>
                              </Link>
                            </td>
                            <td className="py-2 px-4 border w-28">
                            <button onClick={()=>handleDelete(movie.id)} className="bg-[#411b1b] text-white w-20  px-2 py-1 rounded-md">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminHome;