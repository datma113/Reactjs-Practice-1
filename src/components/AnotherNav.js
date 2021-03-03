import React from "react";
import { Route, Link } from "react-router-dom";
const AnotherNav = () => {

  const CustomRoute = ({ to, label, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          let matchesClass = match ? "class nav-item" : "nav-item";
          return (
            <li className={matchesClass}>
              <Link className="nav-link " to={to} exact={activeOnlyWhenExact}>
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };

  const routes = [
       {title: "router A", exact: true, to: '/routerA'},
       {title: "router B", exact: false, to: '/routerB'},
       {title: "router C", exact: false, to: '/routerC'},
  ]

  const routesRender = routes.map( (route, index) => {
       return <CustomRoute key={index} to={route.to} exact={route.activeOnlyWhenExact} label={route.title} />
  })

  return (
    <div>
      <ul className="nav justify-content-end">
        {routesRender}
      </ul>
    </div>
  );
};

export default AnotherNav;
