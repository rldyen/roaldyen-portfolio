import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import PageNotFound from '../pages/PageNotFound';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" exact element ={<Home />} />
            <Route path="/home" exact element ={<Home />} />
            <Route path ="/about" element ={<About />} />
            <Route path ="/projects" element ={<Projects />} />
            <Route path ="/contact" element ={<Contact />} />
          	<Route path="*" element={<PageNotFound />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes