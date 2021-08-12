import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { MovieList } from "../../components/MovieList/MovieList";
import { getSearchMovies } from "../../services/apiService";
import { Spinner } from "../../components/Spinner/Spinner";
import { Pagination } from "../../components/Pagination/Pagination";

export function MoviesPage() {
    // const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("idle");
    const history = useHistory();
    const location = useLocation();
    const currentPage = Number(new URLSearchParams(location.search).get("page")) || 1;
    const searchQuery = new URLSearchParams(location.search).get("query");
    const [totalPages, setTotalPages] = useState(null);

    useEffect(() => {
        if (!searchQuery) { 
        return
    }
        async function getMovies() {
            setStatus("pending");
        try {
            const data = await getSearchMovies(searchQuery, currentPage);
            const { results, total_pages } = data;
            if (!results.length) {
          throw new Error("Results not found");
        }
            setMovies(results);
            setTotalPages(total_pages);
            setStatus("resolved");
        }
        catch (error) {
            console.log(error);
            toast.warning("Results not found");
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
    const onPageClick = ({selected}) => {
     history.push({
      ...location,
      search: selected === 0 ? "":`page=${selected+1}`,
     })
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                <Pagination
                totalPages={totalPages}
                onClick={onPageClick}
                currentPage={currentPage} />
                </>
            )
        }
        if (status === "rejected") {
            return (
                <SearchForm onSearch={handleQueryChange} />
            )
        } 
}