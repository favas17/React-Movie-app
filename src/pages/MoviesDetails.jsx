import { useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import { useMovieContext } from '../Redux/useContext';
import { useParams } from 'react-router-dom';
import YouTube from "react-youtube"

function MovieDetails({  }) {

    const getYouTubeId = (url) => {
        const regExp =
          /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
      };


    const {id} = useParams();
    const storedMovies = JSON.parse(localStorage.getItem("movies"));

    const movie = storedMovies.find((movie) => movie.id === id);
    console.log(id)

    if(!movie){ 
        return <div><p>Movie not found</p></div>
    }

    // const [userRating, setUserRating] = useState(0);
    // const [userComment, setUserComment] = useState('');

    // const handleRatingChange = (rating) => {
    //     setUserRating(rating);
    // };

    // const handleCommentChange = (e) => {
    //     setUserComment(e.target.value);
    // };

    return (
        <div className="bg-black text-white py-10 w-full h-screen">
            <div className="container mx-auto flex flex-col md:flex-row ">
                <div className="trailer-section w-full md:w-1/2">

                <YouTube videoId={getYouTubeId(movie.trailer)}
                opts={{
                    height:"400",
                    width:"100%",
                    playerVars:{mute:1},
                }}
                />
                </div>
                <div className="details-section w-full md:w-1/2 px-5">
                    {/* Movie Details Section */}
                    <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                    <p className="mb-4"><strong>Cast:{movie.cast}</strong> </p>
                    <p className="mb-4"><strong>Description: {movie.description}</strong> </p>

                    <p className="mb-4"><strong>Average Rating:</strong> </p>
                    {/* User Rating Section */}
                    <div className="flex items-center mb-4">
                        <span className="mr-2">Rate this movie:</span>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <IoIosStar
                                key={rating}
                                // className={`text-2xl cursor-pointer ${
                                //     userRating >= rating ? 'text-yellow-400' : 'text-gray-400'
                                // }`}
                                // onClick={() => handleRatingChange(rating)}
                            />
                        ))}
                    </div>
                    <textarea
                        className="w-full h-24 rounded-lg p-2 mb-4 bg-gray-900 text-white"
                        placeholder="Write your review..."
                        // value={userComment}
                        // onChange={handleCommentChange}
                    ></textarea>
                    <button className="bg-[#2d2d31] text-white px-4 py-2 rounded-md" >
                        Submit Review
                    </button>
                </div>
                
            </div>
            <div className="reviews-section ">
                    {/* User Reviews Section */}
                    <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
                    {/* Render user reviews here */}
                </div>
        </div>
    );
}

export default MovieDetails;
