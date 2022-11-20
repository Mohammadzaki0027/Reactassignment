import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DashBoard  from "./DashBoard";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import PrivateRoute from "../Components/PrivateRouter";
import Setting from "./Setting";
const links = [
  {
    to: "/",
    title: <Home />,
    id: Date.now(),
  },
  {
    to: "/about",
    title: <About />,
    id: Date.now(),
  },
  {
    to: "/contact",
    title: <Contact />,
    id: Date.now(),
  },
  {
    to: "/DashBoard",
    title: <DashBoard/>,
    id: Date.now(),
  },
  {
    to: "/login",
    title: <Login />,
    id: Date.now(),
  },
];

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      
        <Route path="/DashBoard" element={  <PrivateRoute><DashBoard /></PrivateRoute>}></Route>
        <Route path="/Setting" element={ <Setting/>}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
