import { MovieCardByActor, MovieInfoByActor, MoviePosterByActor, MovieTitleByActor, MovieYearByActor } from "./MoviesByActor.styled";

export function KnownAsCard({known_for}) {
    console.log(known_for)
    return (
            <MovieCardByActor>
                <MoviePosterByActor />
                <MovieInfoByActor>
                    <MovieTitleByActor></MovieTitleByActor>
                    <MovieYearByActor></MovieYearByActor>
                </MovieInfoByActor>
            </MovieCardByActor>
    )
}