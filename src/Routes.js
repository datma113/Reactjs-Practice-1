import React from 'react'

import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

const Routes = [
     { path: '/', exact: true, component: () => <Main/> },
     { path: '/contact', exact: false, component: () => <Contact/> },
     { path: '/about', exact: false, component: () => <About/> },
]


export default Routes
