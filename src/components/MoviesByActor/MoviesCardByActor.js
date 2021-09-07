import moment from "moment";
import { MovieCardByActor, MovieInfoByActor, MoviePosterByActor, MovieTitleByActor, MovieYearByActor } from "./MoviesByActor.styled";
import defaultImg from "../../images/default.png";

export function KnownAsCard({id, title, posterPath, release}) {
    const relYear = moment(release).format("YYYY");
    return (
    <>
        <MovieCardByActor>
            <MoviePosterByActor src={posterPath ? `https://image.tmdb.org/t/p/original${posterPath}` : defaultImg}/>
            <MovieInfoByActor>
                    <MovieTitleByActor>{title}</MovieTitleByActor>
                    <MovieYearByActor>{relYear}</MovieYearByActor>
            </MovieInfoByActor>
        </MovieCardByActor>
    </>
    )
}