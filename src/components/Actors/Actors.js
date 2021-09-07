import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";

import { ActorBirthday, ActorBio, ActorContainer, ActorName, ActorPhoto, ActorPlace, ActorsInfoContainer, MoviesWithActor, KnownMovTitle } from "./Actors.styled";
import defaultImg from "../../images/default.png";
import { KnownAsList } from "../MoviesByActor/MovieListByActor";
import { getMoviesByActor } from "../../services/apiService";



export function Actor({ name, place, birthday, bio, photo, id }) {

    const currentAge = moment().diff(birthday, 'years');
    // const currentAge = moment(birthday).toNow()
    const birth = moment(birthday).format("MMMM Do YYYY");
    const [actorInfo, setActorInfo] = useState([]);
    useEffect(() => {
        async function getMovies () {
            try {
                const actorInfo = await getMoviesByActor(name);
                setActorInfo(actorInfo);
            } catch (error) {
                toast.warning("Actor not found")
            }
        }
        getMovies();
    }, [name]);
    const filterById = actorInfo.filter(act => act.id === id);
    const [actorFilms] = filterById.map(arr => arr.known_for);

    return (
        <ActorContainer>
            <ActorPhoto src={photo ? `https://image.tmdb.org/t/p/original${photo}` : defaultImg}/>
            <ActorsInfoContainer>
                <ActorName>{name}</ActorName>
                {birthday && <ActorBirthday>Date of birth: {birth} ({currentAge} years)</ActorBirthday>}
                {place && <ActorPlace>Place of birth: {place}</ActorPlace>}
                <ActorBio>{bio}</ActorBio>
                <KnownMovTitle>Known for movies: </KnownMovTitle>
                <KnownAsList actorFilms={actorFilms}/>
            </ActorsInfoContainer>
        </ActorContainer>
    )
}