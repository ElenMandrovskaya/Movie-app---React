import { ActorBirthday, ActorBio, ActorContainer, ActorName, ActorPhoto, ActorPlace, ActorsInfoContainer, MoviesWithActor } from "./Actors.styled";
import defaultImg from "../../images/default.png";

export function Actor({name, place, birthday, bio, photo}) {
    return (
        <ActorContainer>
            <ActorPhoto src={photo ? `https://image.tmdb.org/t/p/original${photo}` : defaultImg}/>
            <ActorsInfoContainer>
                <ActorName>{name}</ActorName>
                <ActorBirthday>Date of birth: {birthday}</ActorBirthday>
                <ActorPlace>Place of birth: {place}</ActorPlace>
                <ActorBio>{bio}</ActorBio>
                <MoviesWithActor>Movie list</MoviesWithActor>
            </ActorsInfoContainer>
        </ActorContainer>
    )
}