import PropTypes from "prop-types";
import { Photo, List, Actor, Name } from "./Cast.styled";
import defaultImg from "../../images/default.png";

export function Cast({actors}) {
    return (
            <List>
                {actors.map(({id, name, profile_path}) => (
                    <Actor key={id}>
                        <Photo src={profile_path ? `https://image.tmdb.org/t/p/original${profile_path}` : defaultImg}/>
                        <Name>{name}</Name>
                    </Actor>
                ))}
            </List>
    )
}

Cast.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        profile_path: PropTypes.string,
        }),
    ),
}