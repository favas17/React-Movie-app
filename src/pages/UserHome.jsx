import { Link } from "react-router-dom";
import { useMovieContext } from "../Redux/useContext";
import MovieCard from "../components/MovieCard";
import cover from "../assets/godfatherCover.avif";
import { useState } from "react";

function UserHome() {
    const { movies } = useMovieContext();

    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 10;

    // Logic to calculate index range for movies on current page
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

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
            <div className="h-2/4 w-full border-b-8 border-[#232323]">
                <img className="h-2/4 w-4/6 object-cover m-auto mb-5" src={cover} alt="" />
            </div>

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
