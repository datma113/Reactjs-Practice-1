import React from 'react'

import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";

import RouterA from './components/RouterA';
import RouterB from './components/RouterB';
import RouterC from './components/RouterC';


const Routes = [
     { path: '/', exact: true, component: () => <Main/> },
     { path: '/contact', exact: false, component: () => <Contact/> },
     { path: '/about', exact: false, component: () => <About/> },
     { path: '/routerA', exact: false, component: () => <RouterA/> },
     { path: '/routerB', exact: false, component: () => <RouterB/> },
     { path: '/routerC', exact: false, component: () => <RouterC/> },
]


export default Routes
