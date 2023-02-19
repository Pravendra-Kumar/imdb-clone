import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import Home from './pages/home/Home.js';
import MovieList from './components/movieList/MovieList.js'
import Movie from "./pages/movieDetail/Movie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>

       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/movies/:type" element={<MovieList/>} />
        <Route path="/*" element={<h1>Page Not Found</h1>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
