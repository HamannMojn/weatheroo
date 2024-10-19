import { useTemperature } from "../../Contexts/TemperatureContext";

const Navbar = () => {
  const { isCelsius, toggleTemperatureUnit } = useTemperature();
    const unit = isCelsius ? "Celcius" : "Fahrenheit"


  return (
    <header className="container">
      <nav>
        <ul>
          <li>
            <hgroup>
              <h2>
                <strong>WeatheRoo</strong>
              </h2>
              <p>Weather Reports for Developers in Aarhus</p>
            </hgroup>
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
