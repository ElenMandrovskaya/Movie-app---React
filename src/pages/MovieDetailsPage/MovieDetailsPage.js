import { useEffect, useState } from "react";
import { Route, useRouteMatch, useParams, useHistory } from "react-router-dom";
import { MoviesDetail } from "../../components/MoviesDetail/MoviesDetail";
import { getMovieInfoById } from "../../services/apiService";
import { MovieCast } from "../MovieCast/MovieCast";
import { MovieReviews } from "../MovieReviews/MovieReviews";

export function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const history = useHistory();
    const { path } = useRouteMatch();
// console.log(movieId)
    useEffect(() => {
        async function getMovie() {
            try {
                const movie = await getMovieInfoById(movieId);
                if (!movie) {
                    throw new Error("Page not found");
                }
                setMovie(movie);
            } catch (error) {
                history.push("/");
            }
        }
        getMovie();
    }, [movieId, history]);

    return (
            <>
            {movie && <MoviesDetail
                title={movie.title}
                posterPath={movie.poster_path}
                overview={movie.overview}
                releaseDate={movie.release_date}
                voteRate={movie.vote_average}
                voteCount={movie.vote_count}
                genres={movie.genres.map((genre) => genre.name).join(", ")}
            />}
            <Route path={`${path}/cast`}>
                    <MovieCast />
            </Route>
            <Route path={`${path}/review`}>
                    <MovieReviews />
            </Route>
            </>
    )
}
// getMovieInfoById(57353)