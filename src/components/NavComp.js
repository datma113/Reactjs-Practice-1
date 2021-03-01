import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";

const NavComp = (props) => {
  const CustomLink = ({ to, label, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          let active = match ? "isActive nav-item" : "nav-item";
          return (
            <li className={active}>
              <Link className="nav-link" to={to}>
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };

  return (
    <div>
      <ul className="nav">
        <CustomLink label="Trang chủ" to="/" activeOnlyWhenExact={true} />
        <CustomLink label="liên hệ" to="/contact" />
        <CustomLink label="about" to="/about" />
      </ul>
    </div>
  );
};

export default NavComp;
