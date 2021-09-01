import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/theme/theme-slice";
import getTheme from "../../redux/theme/theme-selectors";
import { FaSun, FaMoon } from "react-icons/fa";
import { SwitchMarker, SwitchInput, SwitchLabel, ThemeControl, ThemeSwitcher, ThemeToolbar } from "./ThemeSwitch.styled";

export default function ThemeSwitch() {

const darkTheme = useSelector(state => getTheme(state));
// console.log(darkTheme)
    const dispatch = useDispatch();
    return (
        <ThemeToolbar>
            <ThemeSwitcher>
                <FaSun size='30' color='#fcba03'/>
                <ThemeControl>
                    <SwitchInput
                        type="checkbox"
                        name="theme"
                        id="theme-switch-control"
                        checked={darkTheme}
                        onChange={() => dispatch(toggleTheme())}
                        className='theme-switch__toggle'
                    />
                    <SwitchLabel
                        aria-hidden="true"
                        className="switch__label"
                        htmlFor="theme-switch-control"/>
                    <SwitchMarker
                        aria-hidden="true"
                        className='theme-switch__marker'
                    />
                </ThemeControl>
                <FaMoon size='30' color='#152782'/>
            </ThemeSwitcher>
        </ThemeToolbar>
    )
}