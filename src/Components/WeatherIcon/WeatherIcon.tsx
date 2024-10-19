import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

interface Props {type:string}

const WeatherIcon: React.FC<Props> = ({type}) => {
    const [Icon, setIcon] = useState<string>();
    useEffect(() => {
        const loadIcon = async () => {
             // Dynamically import the SVG file based on the `type` prop
             const icon = await import(`../../Icons/${type}.svg`);
             setIcon(icon.default); // Set the icon once it's loaded
          };
          loadIcon();
    })
  return (
    Icon ? <img src={Icon} alt={type} /> : <Spinner/>  // Show loading state while icon is being fetched
  )
}

export default WeatherIcon