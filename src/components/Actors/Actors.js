import { ActorBirthday, ActorBio, ActorContainer, ActorName, ActorPhoto, ActorPlace, ActorsInfoContainer, MoviesWithActor } from "./Actors.styled";


export function Actor() {
    return (
        <ActorContainer>
            <ActorPhoto />
            <ActorsInfoContainer>
                <ActorName>name</ActorName>
                <ActorBirthday>birthday</ActorBirthday>
                <ActorPlace>usa</ActorPlace>
                <ActorBio>bio</ActorBio>
                <MoviesWithActor>list</MoviesWithActor>
            </ActorsInfoContainer>
        </ActorContainer>
    )
}