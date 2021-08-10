// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, Poster, MovieTitle, MovieInfo, MovieRate, MovieGenre } from "./MovieCard.styled";
// import { Spinner } from "../Spinner/Spinner";

export function MovieCard({ id, posterPath, title, genres, rating }) {
    const location = useLocation();
    return (
        <Card>
            <Link
                to={{
                    pathname: `/movies/${id}`,
                    state: { from: location },
                }}>
            
            <Poster src={`https://image.tmdb.org/t/p/original${posterPath}`} />
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