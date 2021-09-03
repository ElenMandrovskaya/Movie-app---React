import { ActorBirthday, ActorBio, ActorContainer, ActorName, ActorPhoto, ActorPlace, ActorsInfoContainer, MoviesWithActor } from "./Actors.styled";
import defaultImg from "../../images/default.png";
import moment from "moment";


export function Actor({ name, place, birthday, bio, photo }) {

    const currentAge = moment().diff(birthday, 'years');
    // const currentAge = moment(birthday).toNow()
    // console.log(currentAge)  
    const birth = moment(birthday).format("MMMM Do YYYY");
    // console.log(birth)

    return (
        <ActorContainer>
            <ActorPhoto src={photo ? `https://image.tmdb.org/t/p/original${photo}` : defaultImg}/>
            <ActorsInfoContainer>
                <ActorName>{name}</ActorName>
                {birthday && <ActorBirthday>Date of birth: {birth} ({currentAge} years)</ActorBirthday>}
                {place && <ActorPlace>Place of birth: {place}</ActorPlace>}
                <ActorBio>{bio}</ActorBio>
                <MoviesWithActor>Movie list</MoviesWithActor>
            </ActorsInfoContainer>
        </ActorContainer>
    )
}