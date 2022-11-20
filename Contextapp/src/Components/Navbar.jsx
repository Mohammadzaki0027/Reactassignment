import React from "react";
import { Link, NavLink } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/contact",
    title: "Contact",
  },
  {
    to: "/DashBoard ",
    title: "DashBoard ",
  },
  {
    to: "/login",
    title: "Login",
  },
];
const baseStyle = {
  color: "black",
  textDecoration: "none",
};
const activeStyle = {
  color: "red",
  textDecoration: "none",
};
const Navbar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          border: "1px solid red",
          height: "2rem",
        }}
      >
        {links.map((item) => (
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to={item.to}
            key={item.to}
          >
            {item.title}
          </NavLink>
        ))}
      </div>

    </div>
  );
};

export default Navbar;
