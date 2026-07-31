import Header from "../Header/Header";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <Header/>
    </div>
  );
};

export default Browse;