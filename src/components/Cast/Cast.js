import PropTypes from "prop-types";
import { Photo, List, Actor, Name, Role } from "./Cast.styled";
import defaultImg from "../../images/default.png";
import { NavLink, useLocation } from "react-router-dom";

export function Cast({ actors }) {
     const location = useLocation();
    // console.log(location)
    return (
            <List>
            {actors.map(({ id, name, profile_path, character }) => (
                <NavLink to={{
                    pathname: `/actor/${id}`,
                    state: { from: location },
                }}
                key={id}>
                    <Actor>
                        <Photo src={profile_path ? `https://image.tmdb.org/t/p/original${profile_path}` : defaultImg}/>
                        <Name>{name}</Name>
                        <Role>{character}</Role>
                    </Actor>
                    </NavLink>
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