import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/Homepage";
import App from "../App";


export const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> }]
}]);