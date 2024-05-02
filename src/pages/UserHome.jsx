import MovieCard from "../components/MovieCard"
import cover from "../assets/godfatherCover.avif"
function UserHome() {

    return(

        <div className="w-full h-full bg-black">
            <div className="h-2/4 border-b-8 border-[#232323]">
                <img className=" h-2/4  w-4/6 object-cover   m-auto mb-5" src={cover} alt="" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-7  ">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>

            </div>
        </div>
    )
}



export default UserHome