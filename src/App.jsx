import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserLayout from "./layout/userLayout";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import UserHome from "./pages/UserHome";
import { Provider } from 'react-redux'
import Store from "./Redux/store.jsx"
import AddMovie from "./pages/AddMovies.jsx";
import { MovieProvider } from "./Redux/useContext.jsx";
import MovieDetails from "./pages/MoviesDetails.jsx";
import AdminHome from "./pages/AdminHome.jsx";
import EditMovie from "./pages/EditMovie.jsx";
import RouteGuard from "./utils/RouteGuard.jsx";

function App() {
    return (
        <BrowserRouter>
        <MovieProvider>
        <Provider store={Store}>
        <Routes>

        <Route path="/" element={<LoginPage/>} />
        <Route path="/Signup" element={<SignupPage/>} />

            <Route 
            element={<RouteGuard roles={["user","admin"]} />}
            >

            <Route path="/" element={<UserLayout/>}>
               <Route path="/UserHome" element={<UserHome/>} />
               <Route path="/MovieDetails/:id" element={<MovieDetails/>} />
            </Route>

            </Route>
            

            <Route
            element={<RouteGuard roles={["admin"]}/>}
            >

           <Route path="/AddMovie" element={<AddMovie/>} />
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