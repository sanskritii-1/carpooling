import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import Confirm_page from "./pages/Confirm_page"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    errorElement:<div>404 Not Found</div>,
  },
  {
    path: '/user',
    element: <App/>
  },
  {
    path: "/driver",
    element: <Dashboard/>
  },
  {
    path: "/confirmed",
    element: <Confirm_page/>,
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <Login/> */}
    {/* <App /> */}
    {/* <Confirm_page/> */}
    {/* <Dashboard/> */}
  </StrictMode>
);

// select location on map