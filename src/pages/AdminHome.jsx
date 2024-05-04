import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMovieContext } from "../Redux/useContext";
import { useNavigate } from "react-router-dom";

function AdminHome() {

    const {movies,deleteMovie} = useMovieContext();

    const handleDelete = (id)=>{
        deleteMovie(id)


    }

    // Fetching movies from local storage
    // useEffect(() => {
    //     const storedMovies = JSON.parse(localStorage.getItem("movies"));
    //     if (storedMovies) {
    //         setMovies(storedMovies);
    //     }
    // }, [deleteMovie]);

    return (
        <div className="bg-black text-white w-full h-full  p-6">
            <h1 className="text-3xl font-bold mb-4">Movie List</h1>
            <table className="w-full border-collapse">
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
                            <td className="py-2 px-4 border">
                                <img src={movie.image} alt={movie.title} 
                                className="h-28 w-28 object-cover "/>
                            </td>
                            <td className="py-2 px-4 border">{movie.title}</td>
                            <td className="py-2 px-4 border">{movie.cast}</td>
                            <td className="py-2 px-4 border">{movie.description}</td>
                            <td className="py-2 px-4 border">{movie.trailer}</td>
                            <td className="py-2 px-4 border">
                              <Link to={`/EditMovie/${movie.id}`}>  <button className="bg-[#272735] text-white px-2 py-1 mr-2 rounded-md">Edit</button>
                              </Link>
                            </td>
                            <td className="py-2 px-4 border">
                            <button onClick={()=>handleDelete(movie.id)} className="bg-[#411b1b] text-white px-2 py-1 rounded-md">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminHome;