import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { TemperatureProvider } from "./Contexts/TemperatureContext";
import { ThemeProvider } from "./Contexts/ThemeContext";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <TemperatureProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </TemperatureProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
