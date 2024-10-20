import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { TemperatureProvider } from "./Contexts/TemperatureContext";
import { ThemeProvider } from "./Contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <TemperatureProvider>
          <Navbar />
          <Outlet />
          <ToastContainer />
        </TemperatureProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
