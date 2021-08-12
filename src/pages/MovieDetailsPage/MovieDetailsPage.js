import { useEffect, useState, Suspense, lazy } from "react";
import { Route, useRouteMatch, useParams, useHistory, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MoviesDetail } from "../../components/MoviesDetail/MoviesDetail";
import { getMovieInfoById } from "../../services/apiService";
// import { MovieCast } from "../MovieCast/MovieCast";
// import { MovieReviews } from "../MovieReviews/MovieReviews";
import { BackBtn } from "../../components/MoviesDetail/MoviesDetail.styled";
import { Spinner } from "../../components/Spinner/Spinner";

const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

export function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const history = useHistory();
    const { path } = useRouteMatch();
    const location = useLocation();
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
                toast.warning("Page not found")
            }
        }
        getMovie();
    }, [movieId, history]);

    const OnGoBack = () => {
    const { state } = location;
    if (state) {
      history.push(location.state.from);
      return;
    }
    history.push({
      pathname: '/',
    });
  };

    return (
        <>
            <BackBtn onClick={OnGoBack} >Go Back</BackBtn>
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