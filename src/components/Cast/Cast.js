// import PropTypes from "prop-types";
import { Photo, List, Actor, Name } from "./Cast.styled";

export function Cast({actors}) {
    return (
            <List>
                {actors.map(({id, name, profile_path}) => (
                    <Actor key={id}>
                        <Photo src={`https://image.tmdb.org/t/p/original${profile_path}`}/>
                        <Name>{name}</Name>
                    </Actor>
                ))}
            </List>
    )
}