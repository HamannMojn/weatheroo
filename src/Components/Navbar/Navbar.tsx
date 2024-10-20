import { useTemperature } from "../../Contexts/TemperatureContext";
import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  //UseTemperature from TemperatureContext to allow the user to toggle what unit they want to be shown
  const { isCelsius, toggleTemperatureUnit } = useTemperature();
    const unit = isCelsius ? "Celcius" : "Fahrenheit"


  return (
    <header className="container">
      <nav>
        <ul>
          <li>
          <Logo />
          </li>
          <li>
            <hgroup>
              <h2>
                <strong>WeatheRoo</strong>
              </h2>
              <p>Weather Reports for Developers in Aarhus</p>
            </hgroup>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={toggleTemperatureUnit}>{unit}</button>
          </li>
          <li>
            <a href="https://www.betterdevelopers.dk/">Website</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/better-developers/">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
