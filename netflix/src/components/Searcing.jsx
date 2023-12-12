import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Form from "./Form"
import {Link} from "react-router-dom";
import Footer from './Footer';
function App() {
  const [movies, setMovies] = useState([]);
  

 
   
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1}`);
    const data = await response.json();
    setMovies(data.results);
   
  };



  const handleSearch = (query) =>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_APIKEY}&query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      setMovies(data.results);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <Navbar/>

      <Form handleSearch={handleSearch}/>
      <div className='grid gap-5 grid-cols-2 md:grid-cols-4 xl:grid-cols-5 container mt-10'>
        {movies.map((movie) => (
          
          <Link to={`/movies/${movie.id}`}>
           <div key={movie.id}>
             <img className="w-full h-auto bg-cover  rounded-3xl shadow-md m-0 p-0 " src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
             <p className='text-white'>{movie.title}</p>
          </div>
          </Link>
        
        ))}
      </div> 
      
      <Footer/>
    </div>
  );  
}

export default App;



