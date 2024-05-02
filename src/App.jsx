import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserLayout from "./layout/userLayout";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import MovieCard from "./components/MovieCard";
import UserHome from "./pages/UserHome";
import { Provider } from 'react-redux'
import Store from "./Redux/store.jsx"


function App() {
    return (
        <Provider store={Store}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage/>} />
            <Route path="/Signup" element={<SignupPage/>} />
            <Route path="/" element={<UserLayout/>}>
            <Route path="/movieCard" element={<MovieCard/>} />
            <Route path="/UserHome" element={<UserHome/>} />
            
            </Route>
            
            
        </Routes>            
        </BrowserRouter>
        </Provider>
    );
}

export default App;