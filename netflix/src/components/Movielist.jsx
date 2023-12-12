import React from "react";
import { useState, useEffect } from "react";
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";
import { getMovie } from "../api/Apicomfig";
import { Link } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

function Movielist(props){
    const [movieList, setMovieList] = useState([]);

     useEffect(()=>{
        getMovie(props.type).then((result)=>{
            setMovieList(result);
        })
     }, []);

     const navigate = useNavigate();

    return(
        <>
          <div className="container mt-9 lg:mt-10 md:mt-14">
             <div className="flex items-center justify-between font-semibold text-white mb-5">
                     <h1 className="md:text-3xl text-2xl">{props.title}</h1>
                     <a onClick={()=> navigate('/film')} className="bg-transparent border-2 border-green-500 rounded-full px-7 md:px-9 text-white font-semibold text-xl py-1 md:py-3 max-w-max block">View more</a>
                  </div>
             <Swiper
             modules={[Navigation, Pagination, Autoplay]}
             spaceBetween={15}
             slidesPerView={"auto"}
             loop={true}  
            
             
           >
              
              {movieList.map((movie)=>{
                return <SwiperSlide > 
                   <Link to={`/movies/${movie.id}`}>
                    <div className="" key={movie.id}>
                        <img className="w-full h-auto bg-cover  rounded-3xl shadow-md m-0 p-0 " src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
                        <p className="text-white">{movie.title}</p>
                    </div>
                   </Link>
                    </SwiperSlide>
              })}
           </Swiper>
             </div>

        </>
    )
}

export default Movielist