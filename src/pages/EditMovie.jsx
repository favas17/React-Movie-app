import FormicForm from "../components/FormicMovieForm"
import { useParams } from "react-router-dom"
import { useMovieContext } from "../Redux/useContext";


function EditMovie() {

const {id} = useParams();
const{movies,updatedMovie} = useMovieContext();

const movieToEdit = movies.find((movie)=>movie.id === id)

const initialValues = {
    title:movieToEdit.title,
    cast:movieToEdit.cast,
    description:movieToEdit.description,
    image:movieToEdit.image,
    trailer:movieToEdit.trailer,
}


    const handleSubmit = (values)=>{
        updatedMovie(id,values)
    }



    return(
        <div className="min-h-screen flex items-center justify-center bg-image bg-cover">
            <div className="p-8 rounded-lg shadow-lg md:w-2/3 lg:w-1/2 bg-gray-500">
                <h1 className="text-3xl font-bold mb-6">Edit Movie</h1>

                <FormicForm  
                buttonLabel={"Update Movie"}
                onSubmit={handleSubmit}
                initialValues={initialValues}
                />
        </div>
            </div>
    )
}

export default EditMovie