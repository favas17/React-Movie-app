import { createContext,useContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// create a context
const MovieContext = createContext();

// create a custom hook to use the movie context
export const useMovieContext = ()=>useContext(MovieContext);

// movie provider component to wrap the app and provide the context
export const MovieProvider = ({children}) =>{
    const navigate = useNavigate();
    const [movies,setMovies] = useState([]);

    // load movies from local storage from intial render
    useEffect(()=>{
        const storedMovies = JSON.parse(localStorage.getItem("movies"));
        if(storedMovies){
            setMovies(storedMovies)
        }
    },[])

    // function to add movie
    const addMovie = (movie) =>{
        const updatedMovies = [
            ...movies,
               movie];
        setMovies(updatedMovies);
        // save updated movies to local storage
        localStorage.setItem("movies",JSON.stringify(updatedMovies));
        }


        // function toupdate movie
        const updatedMovie = (id,updatedData) =>{
            const updatedMovies = movies.map(movie => movie.id === id ?{...movie,...updatedData}:movie);

            setMovies(updatedMovies);

            localStorage.setItem("movies",JSON.stringify(updatedMovies))
            navigate("/AdminHome")
        }

        // function to delete movie
        const deleteMovie = (id) =>{
            const updatedMovies = movies.filter(movie => movie.id !== id);
            setMovies(updatedMovies);

            // save updated movies to lstorage
            localStorage.setItem("movies",JSON.stringify(updatedMovies))


            
        }


    return(
        <MovieContext.Provider value={{movies,addMovie,updatedMovie,deleteMovie}}>
            {children}
        </MovieContext.Provider>
    )
}