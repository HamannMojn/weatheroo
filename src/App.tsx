import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { TemperatureProvider } from "./Contexts/TemperatureContext";

function App() {
  return (
    <>
      <TemperatureProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </TemperatureProvider>
    </>
  );
}

export default App;
