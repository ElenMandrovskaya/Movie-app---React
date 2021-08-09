// import PropTypes from "prop-types";
// import { useRouteMatch } from "react-router-dom";
import { MovieContainer, Poster, MovieTitle, ItemTitle, ItemDesc } from "./MoviesDetail.styled";

export function MoviesDetail({ posterPath, title, genres, voteRate, releaseDate, overview, popularity }) {
    // const { url } = useRouteMatch();
    return (
        <MovieContainer>
            <Poster src={`https://image.tmdb.org/t/p/original${posterPath}`}/>
            <MovieTitle>{`${title} (${releaseDate.substring(0, 4)})`}</MovieTitle>
            <ItemDesc>User Score: {voteRate}</ItemDesc>
            <ItemTitle>Overview</ItemTitle>
            <ItemDesc>{overview}</ItemDesc>
            <ItemTitle>Genres</ItemTitle>
            <ItemDesc>{genres}</ItemDesc>
        </MovieContainer>
    )
}