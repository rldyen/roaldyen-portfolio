import React from "react";
import TextSpan from "../components/TextSpan";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import FolderIcon from "@mui/icons-material/Folder";

export default function Home() {
  const name = "Roald!".split("");
  const navigate = useNavigate();
  const routeToProjects = () => {
    let path = "/projects";
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 700 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[url(./assets/backgrounds/layered-waves-haikei-1.svg)] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-row items-baseline justify-center">
          <div className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl">
            Hello, I am
          </div>

          <div className="ml-3 text-4xl sm:text-3xl md:text-6xl lg:text-6xl ">
            <div className="font-bold text-primary">
              {name.map((letter, index) => {
                return (
                  <span className="hover:text-secondary">
                    <TextSpan key={index}>
                      <Link to="/about">
                        {letter === " " ? "\u00A0" : letter}
                      </Link>
                    </TextSpan>
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="mt-6 texl-2xl md:text-3xl lg:text-3xl text-accent">
            A creative&nbsp;
            <TypeAnimation
              sequence={[
                "Junior UI/UX Designer",
                2000,
                "Product Designer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <p className="m-8 text-justify sm:w-9/12 md:w-9/12 lg:w-6/12 mt-10 text-md md:text-lg lg:text-lg">
            🚀 I'm a tech enthusiast with a passion for building applications that
            make a real impact. With a strong focus on design, I create web and
            mobile app experiences that are visually stunning and user-friendly.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.button
            onClick={routeToProjects}
            className="btn-primary btn-md sm:btn-md md:btn-md lg:btn-lg mt-4 rounded-2xl cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="flex flex-row items-center">
              <FolderIcon />
              <div className="ml-2">See my Projects</div>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
