import { MoviesListByActor } from "./MoviesByActor.styled";
import { KnownAsCard } from "./MoviesCardByActor";

export function KnownAsList({ actorFilms }) {
    return (
        <MoviesListByActor>
            {actorFilms && actorFilms.map(({ id, title, poster_path, release_date }) => (
                <KnownAsCard
                    key={id}
                    id={id}
                    posterPath={poster_path}
                    title={title}
                    release={release_date}
            />))}
        </MoviesListByActor>
    )
}