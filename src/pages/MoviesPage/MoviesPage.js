import { useState, useEffect } from "react";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";

import { SearchForm } from "../../components/SearchForm/SearchForm";
import { MovieList } from "../../components/MovieList/MovieList"
import { getSearchMovies } from "../../services/apiService";

export function MoviesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const { isExact } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();
    const currentPage = Number(new URLSearchParams(location.search).get("page")) || 1;

    useEffect(() => {
    
        async function getMovies() {
        if (!isExact) {
      history.push("/");
    }
        try {
            const data = await getSearchMovies(searchQuery, currentPage);
            const { results } = data;
            setMovies(results);
      } catch (error) {
      console.log(error);
      }
    }
    getMovies();
  }, [searchQuery, currentPage, history, isExact])

    const handleQueryChange = query => {
    if (query === searchQuery) {
    //   toast.info('Please, enter new query!');
      return;
    }
    resetState();
    setSearchQuery(query)
  };    

    const resetState = () => {
        setSearchQuery("");
    };
    return (
        <>
        <SearchForm onSearch={handleQueryChange} />
        {movies && <MovieList movies={movies} />}
        </>
    )
}