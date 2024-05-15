import { Link } from "react-router-dom";
import { useMovieContext } from "../Redux/useContext";
import MovieCard from "../components/MovieCard";
import cover from "../assets/godfatherCover.avif";
import { useState } from "react";

function UserHome() {
    const { movies, searchQuery} = useMovieContext();
    
    // filtering
    const [highRated,setHighRated] = useState(false);
    // toggling high rated
    const toggleHighRated = ()=>{
        setHighRated(!highRated)
    }

    const [currentPage, setCurrentPage] = useState(1);

    const moviesPerPage = 10;

    // Logic to calculate index range for movies on current page
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!highRated || (movie.review && movie.review.some(review => review.rating >4)))
    );

    
    const currentMovies = filteredMovies.slice(indexOfFirstMovie,indexOfLastMovie)

    // const  = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    // Logic to handle pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to go to the previous page
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


  

    return (
        <div className="w-full h-full bg-black">
            <div className="h-96 w-full border-b-8 border-[#232323]">
                <img className="h-full md:w-4/6 w-full  object-cover m-auto " src={cover} alt="" />
            </div>

            {/* filter button */}
            <button onClick={toggleHighRated} className="text-white mt-4 ml-4 mb-2 bg-[#252529] px-4 py-2 rounded-lg">
                {highRated ? "Hide High Rated" : "Show High Rated"}
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-7">
                {currentMovies.map((movie) => (
                    <Link to={`/MovieDetails/${movie.id}`} key={movie.id}>
                        <MovieCard title={movie.title} poster={movie.image} id={movie.id} />
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center text-[#e2cece] h-20">
                <button onClick={goToPreviousPage} disabled={currentPage === 1} className="mx-1">
                    Previous
                </button>
                {[...Array(Math.ceil(movies.length / moviesPerPage)).keys()].map((number) => (
                    <button key={number} onClick={() => paginate(number + 1)} className="mx-1 ">
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default UserHome;
