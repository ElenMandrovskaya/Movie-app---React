import { MovieCardByActor, MovieInfoByActor, MoviePosterByActor, MoviesListByActor, MovieTitleByActor, MovieYearByActor } from "./MoviesByActor.styled";

export function FilmsByActor() {
    
    return (
        <MoviesListByActor>
            <MovieCardByActor>
                <MoviePosterByActor />
                <MovieInfoByActor>
                    <MovieTitleByActor></MovieTitleByActor>
                    <MovieYearByActor></MovieYearByActor>
                </MovieInfoByActor>
            </MovieCardByActor>
        </MoviesListByActor>
    )
}