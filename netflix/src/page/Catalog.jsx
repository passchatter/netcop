import React from "react";
import Movielist from "../components/Movielist";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
function Catalog(){
    return(
        <>
           <Navbar/>
          <Trending/>
          <Movielist type="popular" title="Trending movies"/>
          <Movielist type="top_rated" title="Top rated movies"/>
          <Movielist type="now_playing" title="Now playing"/>
          <Movielist type="upcoming" title="Upcoming"/>
          <Footer/>
        </>
    )
}

export default Catalog;