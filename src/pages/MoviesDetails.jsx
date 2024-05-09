import { IoIosStar,IoIosStarHalf } from 'react-icons/io';
import { useMovieContext } from '../Redux/useContext';
import { useParams } from 'react-router-dom';
import { useState } from 'react'; // Removed unnecessary import
import YouTube from "react-youtube";

function MovieDetails() {
    const getYouTubeId = (url) => {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const { id } = useParams();
    const { movies, addReview } = useMovieContext();
    const [userRating, setUserRating] = useState(0);
    const [reviewComment, setReviewComment] = useState('');
    const [hover,setHover] = useState(null)


    // calculating avaerage rating
    const averageRating =  ()=>{
        if(!movie.review || movie.review.length === 0){
            return 0;
        }

        const totalRating = movie.review.reduce((acc,curr)=>acc + curr.rating, 0);
        const avergRating = totalRating/movie.review.length;
        return avergRating;
    }

    // making it to star
     const averageStar = () =>{
        const avrgRating = averageRating();
        const wholeStar = Math.floor(avrgRating);
        const halfStar = avrgRating %1 !==0;

        const starIcon = [];
        for(let i=0; i<wholeStar;i++){
            starIcon.push(<IoIosStar key={i} className='text-yellow-400' />)
        }
        if(halfStar){
            starIcon.push(<IoIosStarHalf key="half" className='text-yellow-400'/>)
        }

        return starIcon;
     }

    const handleReviewComment = (e) => {
        setReviewComment(e.target.value);
    };

    const handleSubmitReview = () => {
        if (userRating || reviewComment) {
            addReview(id, userRating, reviewComment);
            setUserRating(0);
            setReviewComment('');
        }
    };

    const movie = movies.find((movie) => movie.id === id);

    if (!movie) {
        return <div><p>Movie not found</p></div>;
    }

    return (
        <div className="bg-black text-white py-10 w-full h-full">
            <div className="container mx-auto flex flex-col md:flex-row ">
                <div className="trailer-section w-full md:w-1/2">
                    <YouTube videoId={getYouTubeId(movie.trailer)}
                        opts={{
                            height: "400",
                            width: "100%",
                            playerVars: { mute: 1 },
                        }}
                    />
                </div>
                <div className="details-section w-full md:w-1/2 px-5">
                    <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                    <p className="mb-4"><strong>Cast:</strong> {movie.cast}</p>
                    <p className="mb-4"><strong>Description:</strong> {movie.description}</p>

                    <p className="mb-4 flex items-center"><strong>Average Rating:</strong> {averageStar()} </p>

                    {/* review and rating area */}
                    <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, index) => (
                  <IoIosStar
                    key={index}
                    className={`cursor-pointer transition-colors duration-200 ${
                      index < (hover || userRating)
                        ? "text-yellow-400"
                        : "text-gray-500"
                    }`}
                    onMouseEnter={() => setHover(index + 1)}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setUserRating(index + 1)}
                  />
                ))}
                    </div>
                    <textarea
                        className="w-full h-24 rounded-lg p-2 mb-4 bg-gray-900 text-white"
                        placeholder="Write your review..."
                        value={reviewComment}
                        onChange={handleReviewComment}
                    ></textarea>
                    <button className="bg-[#2d2d31] text-white px-4 py-2 rounded-md" onClick={handleSubmitReview}>
                        Submit Review
                    </button>
                </div>
            </div>
            <div className="reviews-section ">
                <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
                {movie.review && movie.review.map((review, index) => (
                    <div key={index}>
                        <p className='flex items-center'><strong>Rating:</strong> {[...Array(review.rating)].map((_,index)=>(
                            <IoIosStar key={index} className='text-yellow-400'/>
                        ))}</p>
                        <p><strong>Comment:</strong> {review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieDetails;
