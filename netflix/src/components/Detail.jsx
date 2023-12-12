import React, { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import {getSimilar} from '../api/Apicomfig'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import Footer from './Footer';

const Detail = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const apiKey = process.env.REACT_APP_APIKEY; // Ganti dengan kunci API TMDb Anda
  const [similarMovies, setSimilarMovies] = useState([]);
  const navigate = useNavigate();
  const [movieId, setMovieId] = useState(null);
  const params = useParams();

  useEffect(() => {
    const { movieId } = params;
    if (movieId) {
      setMovieId(movieId);
      getSimilar(movieId).then((result)=>{
        setSimilarMovies(result)
      })
    }
  }, [params]);

  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`);
  };


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const respnse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: apiKey,
            append_to_response: 'credits,videos,reviews'
          }
        });

        setMovieDetails(respnse.data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId, apiKey]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }





  return (
    <div className='text-white'>
      <Navbar/>


      <div className="relative md:h-[100vh] h-[140vh]" >
           <img className="w-full  md:h-[100vh] h-[70vh] bg-no-repeat shadow-md " src={"https://image.tmdb.org/t/p/w500" + movieDetails.backdrop_path} alt="" />
            <div className="bg-gradient-to-t from-[#010d23] to-[#010d23]/60 w-full  h-[100vh] md:h-[100vh] top-0 left-0 absolute">
            <div className="container mt-36 2xl:mt-48 grid md:grid-cols-2 gap-2 items-center justify-center z-30 ">
                <div className="content max-w-2xl">
                  <h1 className="text-white font-bold lg:leading-[4rem] text-3xl md:text-4xl lg:text-5xl mb-3 2xl:text-7xl">{movieDetails.title}</h1>
                  <h2 className="text-green-500 text-3xl">{movieDetails.release_date}</h2>
                  <h3 className=''>Runtime: {movieDetails.runtime} Minutes</h3>
                  <div className="flex flex-wrap gap-5 items-center">
                    <h3 className='text-xl font-semibold'>Vote Average: {movieDetails.vote_average}</h3>
                    <h3 className='text-xl font-semibold'>Vote Count: {movieDetails.vote_count}</h3>
                  </div>
                  <p className="max-w-md text-[.9rem] mt-1">{movieDetails.overview}</p>
                    <h1 className='text-white font-semibold text-xl mt-2'>Casts :</h1>
                        {movieDetails.credits && movieDetails.credits.cast && movieDetails.credits.cast.length > 0 ? (
                        <div className='flex gap-2 mt-4 '>
                          {movieDetails.credits.cast.slice(0, 4).map((cast) => (
                          
                          <div key={cast.id}>
                                <img src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`} className="w-[140px] rounded-xl mb-1" alt={cast.name} />
                                <h2>{cast.name}</h2>         
                              </div>
                          ))}
                        </div>
                        ) : (
                          <p>No cast information available</p>
                        )}
                </div>

              <div className="mx-auto lg:ml-auto">
                <img src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path} alt="" className="ro rounded-2xl lg:w-[90%] 2xl:w-full shadow-xl h-[95%] lg:mt-0 mt-5"/>
              </div>
            </div>  
            </div>  
           </div>
            

          <h3 className='text-3xl text-center mb-5 color-green-500 font-semibold mt-[7rem]'>Videos:</h3>
          {movieDetails.videos && movieDetails.videos.results && movieDetails.videos.results.length > 0 ? (
          <div className='container grid gap-2'>
            {movieDetails.videos.results.slice(0, 6).map((video) => (
              <div key={video.key}>
                <iframe
                  title={video.name}
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        ) : (
            <div className="container text-center">
              <h1 className='text-3xl text-green-500 font-semibold'>video undivinidet</h1>
            </div>
        )}
          
          <div className="container mt-28 lg:mt-36 md:mt-14">
             <div className="flex items-center justify-between font-semibold text-white mb-5">
                     <h1 className="md:text-3xl text-2xl">Similar movies</h1>
                     <a onClick={()=> navigate('/film')} className="bg-transparent border-2 border-green-500 rounded-full px-7 md:px-9 text-white font-semibold text-xl py-1 md:py-3 max-w-max block">View more</a>
                  </div>
             <Swiper
             modules={[Navigation, Pagination, Autoplay]}
             spaceBetween={15}
             slidesPerView={"auto"}
             loop={true}  
            
             
           >
              
              {similarMovies.map((movie)=>{
                return <SwiperSlide > 
                   <div onClick={()=> handleMovieClick(movie.id)}>
                    <div className="" key={movie.id}>
                        <img className="w-full h-auto bg-cover  rounded-3xl shadow-md m-0 p-0 " src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="" />
                        <p className="text-white">{movie.title}</p>
                    </div>
                   </div>
                    </SwiperSlide>
              })}
           </Swiper>
             </div>
          
          <Footer/>
        </div>

       
    
  );


};

export default Detail;
