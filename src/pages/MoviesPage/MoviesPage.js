import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { SearchForm } from "../../components/SearchForm/SearchForm";
import { MovieList } from "../../components/MovieList/MovieList";
import { getSearchMovies } from "../../services/apiService";
import { Spinner } from "../../components/Spinner/Spinner";

export function MoviesPage() {
    // const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("idle");
    const history = useHistory();
    const location = useLocation();
    const currentPage = Number(new URLSearchParams(location.search).get("page")) || 1;
    const searchQuery = new URLSearchParams(location.search).get("query");

    useEffect(() => {
        if (!searchQuery) { 
        return
    }
        async function getMovies() {
            setStatus("pending");
        try {
            const data = await getSearchMovies(searchQuery, currentPage);
            const { results } = data;
            if (!results.length) {
          throw new Error("No results found");
        }
            setMovies(results);
            setStatus("resolved");
        }
        catch (error) {
            console.log(error);
            setStatus("rejected");
      }
    }
    getMovies();
    }, [searchQuery, currentPage])

    const handleQueryChange = query => {
        if (!query || query === searchQuery) {
            //   toast.info('Please, enter new query!');
            return;
        }
        setMovies([]);
        history.push({
        ...location,
        search: `query=${query}`,
        });
    }

        if (status === "idle") {
            return (
                <SearchForm onSearch={handleQueryChange} />
            )
        }
        if (status === "pending") {
            return (
                <>
                <SearchForm onSearch={handleQueryChange} />
                <Spinner />
                </>
            )
        }
        if (status === "resolved") {
            return (
                <>
                <SearchForm onSearch={handleQueryChange} />
                {movies && <MovieList movies={movies} />}
                </>
            )
        }
        if (status === "rejected") {
            return (
                <SearchForm onSearch={handleQueryChange} />
            )
        } 
}