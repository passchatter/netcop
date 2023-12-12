import React from "react";
import {getTrending} from "../api/Apicomfig";
import {useState, useEffect} from "react";
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import Trendingslides from "./Trendingslides"
import 'swiper/css';


SwiperCore.use([Autoplay,Pagination,Navigation]);

function Trending(){

    const [trending, setTrending] = useState([]);
    
    useEffect(()=>{
        getTrending().then((result)=>{
            setTrending(result)
        });
    }, [])

   
    return(
        <>
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{clickable: true}}
            autoplay={{
                  delay: 4600,
                  disableOnInteraction: false
                 }}
            loop
           >
              
              {trending.map((movie, i)=>{
                return <SwiperSlide> <Trendingslides key={i} movie={movie}></Trendingslides></SwiperSlide>
              })}
           </Swiper>
        </>
    )
}

export default Trending;