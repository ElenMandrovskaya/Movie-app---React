import { BASE_URL, API_KEY } from "../constants/constants";
import axios from "axios";

axios.defaults.baseURL = BASE_URL;

export async function getTranding(page) {
    const url = `/trending/movie/week?api_key=${API_KEY}&page=${page}`;
    const {data} = await axios.get(url);
    return data;
}

export async function getSearchMovies(seacrhQuery, page) {
    const url = `/search/movie?api_key=${API_KEY}&query=${seacrhQuery}&page=${page}&language=en-US&include_adult=false`;
    const { data } = await axios.get(url);
    return data; 
}

export async function getMovieInfoById(movieId) {
    const url = `/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    const { data } = await axios.get(url);
    return data; 
}

export async function getCast(movieId) {
    const url = `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    const { data } = await axios.get(url);
    return data.cast;

}

export async function getReviews(movieId) {
    const url = `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const { data } = await axios.get(url);
    return data.results;
}

export async function getGenresList() {
    const url = `/genre/movie/list?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    return data.genres;    
}

export async function getActorsInfo(person_id) {
    const url = `/person/${person_id}?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    // console.log(data)
    return data;    
}

export async function getMoviesByActor(actorName) {
    const url = `/search/person?api_key=${API_KEY}&query=${actorName}`;
    const { data } = await axios.get(url);
    // console.log(data)
    return data;    
}
getMoviesByActor('monica')
