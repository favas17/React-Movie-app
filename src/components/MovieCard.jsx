import poster from "../assets/godfather.jpg"
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
function MovieCard({title,id}) {

    return(

        <div className="flex flex-col justify-evenly items-center border-2 border-[#232323]">
            <div className="">
                <img className=" object-cover" src={poster} alt="" />
            </div>

            <h2 className="text-white">{title}</h2>

            <div>
                <h5> <IoIosStar className="text-yellow-400" /></h5>
            </div>
        </div>
    )
}


export default MovieCard