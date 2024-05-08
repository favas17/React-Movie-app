// MovieProvider.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem("movies"));
        if (Array.isArray(storedMovies)) {
            setMovies(storedMovies);
        }
    }, []);

    const addMovie = (movie) => {
    // Retrieve existing movies from local storage
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    
    // Append the new movie to the existing array
    const updatedMovies = [
        ...storedMovies,
        {
            ...movie,
            review: movie.review || []
        }
    ];
    
    // Update the state with the new movies array
    setMovies(updatedMovies);
    
    // Store the updated movies array in local storage
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
};
    const addReview = (movieId, rating, review) => {
        setMovies((prevMovies) => {
            const updatedMovies = prevMovies.map((movie) => {
                if (movie.id === movieId) {
                    const newReview = { rating, review, date: new Date().toISOString() };
                    return { ...movie, review: [...movie.review, newReview] };
                }
                return movie;
            });
            localStorage.setItem("movies", JSON.stringify(updatedMovies));
            return updatedMovies;
        });
    };

    const updatedMovie = (id, updatedData) => {
        const updatedMovies = movies.map((movie) => (movie.id === id ? { ...movie, ...updatedData } : movie));
        setMovies(updatedMovies);
        localStorage.setItem("movies", JSON.stringify(updatedMovies));
        navigate("/AdminHome");
    };

    const deleteMovie = (id) => {
        const updatedMovies = movies.filter((movie) => movie.id !== id);
        setMovies(updatedMovies);
        localStorage.setItem("movies", JSON.stringify(updatedMovies));
    };

    return (
        <MovieContext.Provider value={{ movies, addMovie, updatedMovie, deleteMovie, addReview }}>
            {children}
        </MovieContext.Provider>
    );
};
