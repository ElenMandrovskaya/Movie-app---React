// import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Card, Poster, MovieTitle, MovieInfo, MovieRate, MovieGenre } from "./MovieCard.styled";
// import { Spinner } from "../Spinner/Spinner";
import defaultImg from "../../images/default.png";

export function MovieCard({ id, posterPath, title, genres, rating }) {
    const location = useLocation();
    return (
        <Card>
            <Link
                to={{
                    pathname: `/movies/${id}`,
                    state: { from: location },
                }}>
            <Poster src={posterPath ? `https://image.tmdb.org/t/p/original${posterPath}` : defaultImg} />
            {/* <Spinner /> */}
            <MovieTitle>{title}</MovieTitle>
            <MovieInfo>
            <MovieRate>{rating}</MovieRate>
            <MovieGenre>{genres}</MovieGenre>
            </MovieInfo>
            </Link>
        </Card>

    )
}
MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    posterPath: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    genres: PropTypes.array,
}