import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/contact"; 
import Navbar from "./components/navbar"; 
import Team from "./components/team"; 
import Events from "./components/events";
import Sponsers from "./components/sponsers"; 
import Footer from "./components/footer"; 
import Home from "./components/home";
import About from "./components/about";
import Signup from "./components/signup";
import Login from "./components/login";
import Eventregister from "./components/eventregister";

import './App.css';

const router = createBrowserRouter([
  {
    path: "/contact",
    element: 
    <div>
      <Navbar/>
      <Contact/>
      <Footer/>
    </div>, 
  },
  {
    path: "/team",
    element: 
    <div>
      <Navbar/>
      <Team/>
      <Footer/>
    </div>, 
  },
  {
    path: "/events",
    element: 
    <div>
      <Navbar/>
      <Events/>
      <Footer/>
    </div>, 
  },
  {
    path: "/sponsers",
    element: 
    <div>
      <Navbar/>
      <Sponsers/>
      <Footer/>
    </div>, 
  },
  {
    path: "/",
    element: 
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>, 
  },
  {
    path: "/about",
    element: 
    <div>
      <Navbar/>
      <About/>
      <Footer/>
    </div>, 
  },
  {
    path: "/signup",
    element: 
    <div>
      <Signup/>
    </div>, 
  },
  {
    path: "/login",
    element: 
    <div>
      <Login/>
    </div>, 
  },
  {
    path: "/eventregister",
    element: 
    <div>
      <Eventregister/>
    </div>, 
  },
]);


function App() {
  

  return (
    <>
   <RouterProvider router={router} />  
    </>
  )
}

export default App