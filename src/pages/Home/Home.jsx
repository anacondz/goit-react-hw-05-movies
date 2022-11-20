import { useEffect, useState } from "react";
import MovieList from "components/MovieList/MovieList";
import { tredningMovies } from "services/api";

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

     useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const trendingMovies = await trendingMovies();
        setTrendingMovies(trendingMovies);
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList trending={trendingMovies} loading={isLoading} />
    </main>
  );
};

export default Home;
