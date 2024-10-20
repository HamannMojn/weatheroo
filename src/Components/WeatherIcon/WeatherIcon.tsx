import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { useTheme } from "../../Contexts/ThemeContext";

interface Props {type:string}

const WeatherIcon: React.FC<Props> = ({type}) => {
  const {isLightTheme} = useTheme();
  const themeName = isLightTheme ? "Light" : "Dark"
    const [Icon, setIcon] = useState<string>();
    useEffect(() => {
        const loadIcon = async () => {
             // Dynamically import the SVG file based on the `type` prop
             //themeName decides if we import the colored icons or monochrome icons
             const icon = await import(`../../Icons/${themeName}/${type}.svg`);
             setIcon(icon.default); // Set the icon once it's loaded
          };
          loadIcon();
    })
  return (
    Icon ? <img src={Icon} alt={type} /> : <Spinner/>  // Show loading state while icon is being fetched
  )
}

export default WeatherIcon