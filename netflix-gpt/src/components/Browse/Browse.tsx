import { useEffect } from "react";
import { authToken } from "../../utils/constants";
import Header from "../Header/Header";

const Browse = () => {

  const getNowPlayingMovies = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });
    const json = await data.json();
    console.log(json);
  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
  return (
    <div>
      <Header/>
    </div>
  );
};

export default Browse;