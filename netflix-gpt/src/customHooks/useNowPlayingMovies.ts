import { useEffect } from "react";
import { authToken } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
};

export default useNowPlayingMovies;