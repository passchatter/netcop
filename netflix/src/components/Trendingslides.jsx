import React from "react";
import {Link} from "react-router-dom";

function Trendingslides({i, movie}){
    
    return(
        <>
          
           <div className="relative md:h-[100vh] h-[140vh]" key={i}>
           <img className="w-full  md:h-[100vh] h-[70vh] bg-no-repeat shadow-md " src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt="" />
            <div className="bg-gradient-to-r from-[#010d23] to-[#010d23]/60 w-full  h-[200vh] md:h-[100vh] top-0 left-0 absolute">
            <div className="container mt-36 2xl:mt-48 grid lg:grid-cols-2 items-center justify-center z-30 ">
                <div className="content max-w-2xl">
                  <h1 className="text-white font-bold lg:leading-[4rem] text-3xl md:text-6xl lg:text-7xl mb-7 2xl:text-7xl">{movie.title}</h1>
                  <h2 className="text-green-500 text-3xl">{movie.release_date}</h2>
                  <p className="max-w-md text-[.9rem] text-slate-300 mt-5">{movie.overview}</p>
                  <div className="flex flex-wrap gap-2 md:gap-5">
                  <Link to={`/movies/${movie.id}`}> <a className="bg-green-500 rounded-full px-7 md:px-9 text-white font-semibold text-xl py-3 mt-8 max-w-max block">See More</a></Link>
                  <a href="#" className="bg-transparent border-2 border-green-500 rounded-full px-7 md:px-9 text-white font-semibold text-xl py-3 mt-8 max-w-max block">Wathing Trailer</a>
                  </div>
                </div>

              <div className="mx-auto">
              <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" className="ro rounded-2xl lg:w-[80%] 2xl:w-full shadow-xl h-[95%] lg:mt-0 mt-5"/>
              </div>
            </div>  
            </div>  
           </div>
            
          
        </>
    )
}

export default Trendingslides; 