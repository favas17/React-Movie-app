import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Yupval } from '../utils/YupVal';
import { useMovieContext } from '../Redux/useContext';
import {v4 as uuidv4} from "uuid"
import FormicForm from '../components/FormicMovieForm';

const AddMovies = () => {

    const {addMovie} = useMovieContext();

    const handleSubmit = (values) => {
        const moviesId = {...values,id: uuidv4()}; 
        addMovie(moviesId)
    }
    const adem = JSON.parse(localStorage.getItem("movies"))

    return (
        <div className="min-h-screen flex items-center justify-center bg-image bg-cover">
            <div className="p-8 rounded-lg shadow-lg md:w-2/3 lg:w-1/2 bg-gray-500">
                <h1 className="text-3xl font-bold mb-6">Add Movie</h1>
               <FormicForm onSubmit={handleSubmit} 
               
               buttonLabel={"Add Movie"}

               initialValues={{ 
               title:"",
               cast:"",
               description:"",
               trailer:"",
               image:"",
               review:[],
            }}
               />
            </div>
        </div>
    );
};

export default AddMovies;
