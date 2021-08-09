import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MoviesDetail } from "../../components/MoviesDetail/MoviesDetail";
import { getMovieInfo } from "../../services/apiService";

export function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const history = useHistory();

    useEffect(() => {
        async function getMovie() {
            try {
                const movie = await getMovieInfo(movieId);
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
                popularity={movie.popularity}
                voteRate={movie.vote_average}
                genres={movie.genres.map((genre) => genre.name).join(", ")}
            />}
            </>
    )
}