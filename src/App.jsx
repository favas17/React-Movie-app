import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserLayout from "./layout/userLayout";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MovieCard from "./components/MovieCard";
import UserHome from "./pages/UserHome";
import { Provider } from 'react-redux'
import Store from "./Redux/store.jsx"
import AddMovie from "./pages/AddMovies.jsx";
import { MovieProvider } from "./Redux/useContext.jsx";
import MovieDetails from "./pages/MoviesDetails.jsx";
import AdminHome from "./pages/AdminHome.jsx";
import EditMovie from "./pages/EditMovie.jsx";

function App() {
    return (
        <BrowserRouter>
        <MovieProvider>
        <Provider store={Store}>
        <Routes>
        <Route path="/" element={<LoginPage/>} />
            <Route path="/Signup" element={<SignupPage/>} />
            <Route path="/" element={<UserLayout/>}>
            <Route path="/movieCard" element={<MovieCard/>} />
            <Route path="/UserHome" element={<UserHome/>} />
            <Route path="/AddMovie" element={<AddMovie/>} />
            <Route path="/MovieDetails/:id" element={<MovieDetails/>} />
            <Route path="/AdminHome" element={<AdminHome/>} />
            <Route path="/EditMovie/:id" element={<EditMovie/>} />
            </Route>
            
            
        </Routes>            
        </Provider>
        </MovieProvider>
        </BrowserRouter>

    );
}

export default App;