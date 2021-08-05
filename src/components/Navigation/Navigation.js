import { NavList, NavItem } from "./Navigation.styled";
import { NavLink } from "react-router-dom";

export function Navigation() {
    return (
        <NavList>
            <NavItem>
                <NavLink
                    exact
                    to="/"
                    className="navlink"
                    activeClassName="activelink">
                    Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    to="/movies"
                    className="navlink"
                    activeClassName="activelink">
                    Movies</NavLink>
            </NavItem>
        </NavList>
    )
}