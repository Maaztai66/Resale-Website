import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Loginpage from "./login/loginpage";
import Signpage from "./login/Signpage";

const router = createBrowserRouter([

  {
    path: "/",
    element: (

        <HomePage />
    
    ),
  },

  { path: "/login", element: <Loginpage /> },
  { path: "/sign", element: <Signpage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
