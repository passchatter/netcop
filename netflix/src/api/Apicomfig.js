import axios from "axios";

const baseurl = process.env.REACT_APP_BASEURL;
const apikey = process.env.REACT_APP_APIKEY;


export const getTrending = async () => {
   
    const trending = await axios.get(`${baseurl}/trending/movie/week?page=5&api_key=${apikey}`);
    return trending.data.results;
};


export const getMovie = async (type) => {
    const movie = await axios.get(`${baseurl}/movie/${type}?page=1&api_key=${apikey}`);
    return movie.data.results;
}

export const getSimilar = async (id) => {
    const similar = await axios.get(`${baseurl}/movie/${id}/similar?page=1&api_key=${apikey}`);
    return similar.data.results;
    
}

export const getTrailer = async(id) => {
    const trailer = await axios.get(`${baseurl}/movie/${id}/videos?api_key=${apikey}`);
    return trailer.data.results;
}