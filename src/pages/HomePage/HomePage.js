import { useState, useEffect } from "react";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { MovieList } from "../../components/MovieList/MovieList";
import { getTranding } from "../../services/apiService";
import {Spinner} from "../../components/Spinner/Spinner"
    
export function HomePage() {
    const { isExact } = useRouteMatch();
    const history = useHistory();
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("idle");
    // console.log(movies)
    const location = useLocation();
    const currentPage = Number(new URLSearchParams(location.search).get("page")) || 1;
    useEffect(() => {
    
    async function getMovies() {
        if (!isExact) {
      history.push("/");
        }
      setStatus("pending");
        try {
            const data = await getTranding(currentPage);
            const { results } = data;
            setMovies(results);
            // console.log(results)
            setStatus("resolved");
      } catch (error) {
          console.log(error);
          setStatus("idle");
      }
    }
    getMovies();
    }, [currentPage, history, isExact])
  if (status === "idle") {
    return (
      <></>
    )
  }
  if (status === "pending") {
    return (
      <Spinner />
    )
  }
  if (status === "resolved")
  {
    return (
    <>
      {movies && <MovieList movies={movies} />}
    </>
    )
  }
}