import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import './App.css';

function App() {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
