// import PropTypes from "prop-types";
import { Photo, List, Actor, Name } from "./Cast.styled";

export function Cast({credits}) {
    return (
            <List>
                {credits.map(({id, name, profile_path}) => (
                    <Actor key={id}>
                        <Photo src={`https://image.tmdb.org/t/p/original${profile_path}`}/>
                        <Name>{name}</Name>
                    </Actor>
                ))}
            </List>
    )
}