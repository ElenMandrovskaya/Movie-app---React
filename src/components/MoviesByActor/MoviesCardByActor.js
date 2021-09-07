import moment from "moment";
import { Link, useLocation } from "react-router-dom";

import { MovieCardByActor, MovieInfoByActor, MoviePosterByActor, MovieTitleByActor, MovieYearByActor } from "./MoviesByActor.styled";
import defaultImg from "../../images/default.png";

export function KnownAsCard({id, title, posterPath, release}) {
    const relYear = moment(release).format("YYYY");
    const location = useLocation();
    return (
    <>
            <MovieCardByActor>
                <Link
                to={{
                    pathname: `/movies/${id}`,
                    state: { from: location },
                }}>
                    <MoviePosterByActor src={posterPath ? `https://image.tmdb.org/t/p/original${posterPath}` : defaultImg}/>
                    <MovieInfoByActor>
                        <MovieTitleByActor>{title}</MovieTitleByActor>
                        <MovieYearByActor>{relYear}</MovieYearByActor>
                    </MovieInfoByActor>
                </Link>
        </MovieCardByActor>
    </>
    )
}