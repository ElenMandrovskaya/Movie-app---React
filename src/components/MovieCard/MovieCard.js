import { Card, Poster, MovieTitle, MovieInfo, MovieRate, MovieGenre } from "./MovieCard.styled";

export function MovieCard() {
    return (
        <Card>
            <Poster />
            <MovieTitle />
            <MovieInfo>
                <MovieRate />
                <MovieGenre />
            </MovieInfo>
        </Card>

    )
}