// import PropTypes from "prop-types";
import { NavLink, useRouteMatch } from "react-router-dom";
import { MovieContainer, DetailsContainer, Poster, MovieTitle, ItemTitle, ItemDesc } from "./MoviesDetail.styled";

export function MoviesDetail({ posterPath, title, genres, voteRate, voteCount, releaseDate, overview }) {
    const { url } = useRouteMatch();

    return (
        <MovieContainer>
            <Poster src={`https://image.tmdb.org/t/p/original${posterPath}`} />
            <DetailsContainer>
                <MovieTitle>{`${title} (${releaseDate.substring(0, 4)})`}</MovieTitle>
                <ItemDesc>Average Score: {voteRate} (rated by {voteCount} viewers)</ItemDesc>
                <ItemTitle>Overview</ItemTitle>
                <ItemDesc>{overview}</ItemDesc>
                <ItemTitle>Genres</ItemTitle>
                <ItemDesc>{genres}</ItemDesc>
            </DetailsContainer>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
        </MovieContainer>
    )
}