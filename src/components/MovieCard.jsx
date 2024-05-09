import { IoIosStar,IoIosStarHalf } from 'react-icons/io';
import { useMovieContext } from "../Redux/useContext";

function MovieCard({title,poster,id}) {

    const {movies} = useMovieContext();
    const movie = movies.find((movie)=> movie.id === id)
    // finding the average rating
    const averageRating = () =>{
        if(!movie.review || movie.review.length === 0){
            return 0;
        }

        const totalRating = movie.review.reduce((acc,curr)=> acc + curr.rating, 0);
        const avrgRating = totalRating / movie.review.length;

        return avrgRating;
    }

    const averageStar = () =>{
        const avrgeRating = averageRating();
        const wholeStar = Math.floor(avrgeRating);
        const halfStar = avrgeRating %1 !==0;

        const starIcon = [];
        for(let i=0; i<wholeStar; i++){
            starIcon.push(<IoIosStar key={i} className="text-yellow-400"/>)
        }
        if(halfStar){
            starIcon.push(<IoIosStarHalf key="half" className="text-yellow-400"/>)
        }
        return starIcon;
    }

    return(

        <div className="flex flex-col justify-evenly items-center border-2 border-[#232323] h-96 ">
            <div className="w-full h-full">
                <img className=" h-80  w-full object-fill" src={poster} alt="" />
            </div>

            <h2 className="text-white h-5">{title}</h2>

             <div className="flex items-center h-5">
                {averageStar()}
            </div>
        </div>
    )
}


export default MovieCard