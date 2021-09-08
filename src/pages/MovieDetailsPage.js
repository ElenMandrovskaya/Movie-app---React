import { useEffect, useState, Suspense, lazy, useRef } from "react";
import { Route, useRouteMatch, useParams, useHistory, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MoviesDetail } from "../components/MoviesDetail/MoviesDetail";
import { getMovieInfoById } from "../services/apiService";

import { BackBtn } from "../components/MoviesDetail/MoviesDetail.styled";
import { Spinner } from "../components/Spinner/Spinner";
import { FiArrowLeft } from "react-icons/fi";


const MovieCast = lazy(() => import('./MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews'));

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const history = useHistory();
    const { path } = useRouteMatch();
    const location = useLocation();
    const locationState = useRef(location.state?.from).current;

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
                toast.warning("Page not found")
            }
        }
        getMovie();
    }, [movieId, history]);

    const OnGoBack = () => {
    history.push(locationState ?? "/");
  };

    return (
        <>
            <BackBtn onClick={OnGoBack}><FiArrowLeft /></BackBtn>
            {movie && <MoviesDetail
                title={movie.title}
                posterPath={movie.poster_path}
                overview={movie.overview}
                releaseDate={movie.release_date}
                voteRate={movie.vote_average}
                voteCount={movie.vote_count}
                genres={movie.genres.map((genre) => genre.name).join(", ")}
            />}
            <Suspense fallback={<Spinner />}>
                <Route path={`${path}/cast`}>
                        <MovieCast />
                </Route>
                <Route path={`${path}/review`}>
                        <MovieReviews />
                </Route>
            </Suspense>
            </>
    )
}
// getMovieInfoById(57353)