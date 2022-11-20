import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'a6399bd390c157c90a11cb622fa14388';

export const getTrendingMovies = async() => {
    const { data } = await axios.get(`/trending/all/day?api_key=${KEY}`)
    return data.results;
}

export const movieById = async movieId => {
    const res = await axios.get(`/movie/${movieId}?api_key=${KEY}`)
return res.data
}

export const credits = async movieId => {
    const {data} = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
return data.cast
}

export const getReviews = async movieId => {
    const {data} = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`)
return data.results
} 

export const moviesByName = async query => {
  const { data } = await axios.get(`/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};