import React from "react";
import { Link, Route } from "react-router-dom";

const NavComp = (props) => {

  const routes = [
    {title: 'Trang chủ', to: '/', exact: true},
    {title: 'liên hệ', to: '/contact', exact: false},
    {title: 'about', to: '/about', exact: false},
  ];

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

  const routesRender = routes.map( (route, index) => {
    return <CustomLink key={index} label={route.title} to={route.to} activeOnlyWhenExact={route.exact} />
  });

  return (
    <div>
      <ul className="nav">
        {routesRender}
      </ul>
    </div>
  );
};

export default NavComp;
