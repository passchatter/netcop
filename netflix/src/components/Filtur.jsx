import React from "react";
import pertama from '../image/tv.svg'
import dua from '../image/popcorn.svg'
import tiga from '../image/download.svg'
import empat from '../image/crystalball.svg'
function Filtur(){
    return(
      <>
       <div className="px-[1rem] md:px-0">
      <div className="container">
      <div className="grid gap-3 mt-[4rem] md:grid-cols-2 lg:grid-cols-4">
         <div className="p-5 rounded-xl bg-gradient-to-b from-[#002366] to-pink-600">
             <img src={pertama} alt="" className="mb-4"/>
            <h1 className="text-white text-2xl font-semibold">Movie recommendations</h1>
            <p className="text-slate-300 mt-2">A personalized recommendation system that makes it easy for users to discover new films that they may like based on their previous viewing history.</p>
         </div>
         <div className="p-5 rounded-xl bg-gradient-to-b from-[#002366] to-pink-600">
             <img src={dua} alt="" />
            <h1 className="text-white text-2xl font-semibold">Diverse Selection</h1>
            <p className="text-slate-300 mt-2">Offering a variety of movie types, from new releases to classics, to exclusive films that are only available on the platform. This can attract a diverse audience with different tastes in movies.</p>
         </div>
         <div className="p-5 rounded-xl bg-gradient-to-b from-[#002366] to-pink-600">
             <img src={tiga} alt="" className="mb-4"/>
            <h1 className="text-white text-2xl font-semibold">Watchlist Creation</h1>
            <p className="text-slate-300 mt-2">eature that allows users to save a list of movies they want to watch. This makes it easy for them to not miss out on interesting films when searching for a movie to watch.</p>
         </div>
         <div className="p-5 rounded-xl bg-gradient-to-b from-[#002366] to-pink-600">
             <img src={empat} alt="" />
            <h1 className="text-white text-2xl font-semibold">Exclusive Content</h1>
            <p className="text-slate-300 mt-2">Providing exclusive content that is not available on other platforms, such as original films or films that have just been released in theaters.

Multi-Device Access: Users can access the platform from various devices such as</p>
         </div>
       </div>
      </div>
       </div>
      </>
    )
}

export default Filtur;