import PropTypes from "prop-types";
import { NavLink, useRouteMatch } from "react-router-dom";
import { MovieContainer, DetailsContainer, Poster, MovieTitle, ItemTitle, ItemDesc } from "./MoviesDetail.styled";
import defaultImg from "../../images/default.png";

export function MoviesDetail({ posterPath, title, genres, voteRate, voteCount, releaseDate, overview }) {
    const { url } = useRouteMatch();

    return (
        <MovieContainer>
            <Poster src={posterPath ? `https://image.tmdb.org/t/p/original${posterPath}` : defaultImg} />
            <DetailsContainer>
                <MovieTitle>{`${title} (${releaseDate.substring(0, 4)})`}</MovieTitle>
                <ItemDesc>Average Score: {voteRate} (rated by {voteCount} viewers)</ItemDesc>
                <ItemTitle>Overview</ItemTitle>
                <ItemDesc>{overview}</ItemDesc>
                <ItemTitle>Genres</ItemTitle>
                <ItemDesc>{genres}</ItemDesc>
                <ItemTitle>Additional info</ItemTitle>
                <NavLink to={`${url}/cast`}
                         className="info"
                         activeClassName="activeinfo">Cast</NavLink>
                <NavLink to={`${url}/review`}
                         className="info"
                         activeClassName="activeinfo">Review</NavLink>
            </DetailsContainer>
        </MovieContainer>
    )
}

MoviesDetail.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    voteCount: PropTypes.number,
    voteRate: PropTypes.number,
    genres:PropTypes.string,
}