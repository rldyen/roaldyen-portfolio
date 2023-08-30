import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";
import CallIcon from "@mui/icons-material/Call";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Navbar() {
  const navigate = useNavigate();
  const routeToHome = () => {
    let path = "/";
    navigate(path);
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">
                <div className="flex flex-row justify-center align-middle items-center">
                  <HomeIcon />
                  <div className="ml-2">Home</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <div className="flex flex-row justify-center align-middle items-center">
                  <PersonIcon />
                  <div className="ml-2">About</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <div className="flex flex-row justify-center align-middle items-center">
                  <FolderIcon />
                  <div className="ml-2">Projects</div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <div className="flex flex-row justify-center align-middle items-center">
                  <CallIcon />
                  <div className="ml-2">Contact</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={routeToHome}
          className="btn btn-ghost normal-case text-xl ml-6"
        >
          rldyen
        </button>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li>
            <Link className="text-lg" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-lg" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-lg" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="text-lg" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a role="button"
          href="https://flowcv.com/resume/tn53r29g30"
          className="btn mr-6 hover:bg-base-content hover:text-neutral ease-in-out duration-300"
          target="_blank"
          rel="noreferrer"
        >
          <OpenInNewIcon />
          Resume
        </a>
      </div>
    </div>
  );
}
