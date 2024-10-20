import React, { SyntheticEvent } from "react";
import { useTheme } from "../../Contexts/ThemeContext";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";


const ThemeSwitcher = () => {
    //Instead of a button, you switch theme by clicking moonIcon or SunIcon.
    //As with temperature Context, we use ThemeContext to hook into the global state of the theme.
    const {isLightTheme, toggleTheme} = useTheme()
    const nextTheme = isLightTheme ? "light" : "dark";
    const nextThemeLabel = nextTheme === "light" ? "Switch to dark mode" : "Switch to light mode"

    const handleSwitchTheme = (event:SyntheticEvent) => {
        event.preventDefault();
        toggleTheme();
      };

  return (
    <a href={`#${nextTheme}`} data-tooltip={nextThemeLabel} aria-label={nextThemeLabel} onClick={handleSwitchTheme}>
      {isLightTheme ? <MoonIcon /> : <SunIcon />}
    </a>
  )
}

export default ThemeSwitcher