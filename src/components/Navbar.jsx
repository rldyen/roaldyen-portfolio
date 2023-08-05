import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
  <div className="navbar bg-base-100">
    <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl ml-6"><Link to="/">rldyen</Link></a>
    </div>
    
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
            <li><Link className="text-lg" to="/">Home</Link></li>
            <li><Link className="text-lg" to="/about">About</Link></li>
            <li><Link className="text-lg" to="/projects">Projects</Link></li>
            <li><Link className="text-lg" to="/contact">Contact</Link></li>
        </ul>
    </div>
    
    <div className="navbar-end">
        <a
            href="https://flowcv.com/resume/tn53r29g30"
            className="btn mr-6 hover:bg-base-content hover:text-neutral ease-in-out duration-300"
            target="_blank" 
            rel="noreferrer">
                Resume</a>
    </div>
    </div>
  )
}
