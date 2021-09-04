import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MoviesListByActor } from "./MoviesByActor.styled";
import { KnownAsCard } from "./MoviesCardByActor";
import { getMoviesByActor } from "../../services/apiService";

export function KnownAsList({actorName}) {
    const [moviesByActor, setMoviesByActor] = useState([]);

    useEffect(() => {
        async function getMovies () {
            try {
                const moviesByActor = await getMoviesByActor(actorName);
                if (!moviesByActor) {
                    throw new Error("Page not found");
                }
                setMoviesByActor(moviesByActor);
            } catch (error) {
                toast.warning("Page not found")
            }
        }
        getMovies();
     }, [actorName]);
     console.log(moviesByActor)
    return (
        <MoviesListByActor>
            <KnownAsCard movies={moviesByActor}/>
        </MoviesListByActor>
    )
}