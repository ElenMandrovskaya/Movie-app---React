import { useState, useEffect } from "react";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { MovieList } from "../../components/MovieList/MovieList";
import { getTranding } from "../../services/apiService";
    
export function HomePage() {
    const { isExact } = useRouteMatch();
    const history = useHistory();

    const [movies, setMovies] = useState([]);
    // console.log(movies)
    const location = useLocation();
    const currentPage = Number(new URLSearchParams(location.search).get("page")) || 1;
    useEffect(() => {
    
        async function getMovies() {
        if (!isExact) {
      history.push("/");
    }
        try {
            const data = await getTranding(currentPage);
            const { results } = data;
            setMovies(results);
            // console.log(results)
      } catch (error) {
      console.log(error);
      }
    }
    getMovies();
  }, [currentPage, history, isExact])
    return (
    <>
            {movies && <MovieList movies={movies} />}
    </>
    )
}