import React from "react";
import TextSpan from "../components/TextSpan";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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

          <div className="ml-3 text-4xl sm:text-2xl md:text-6xl lg:text-6xl ">
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
          <div className="mt-6 sm:text-xl md:text-3xl lg:text-3xl text-accent">
            An aspiring&nbsp;
            <TypeAnimation
              sequence={["UI/UX Designer", 2000, "Web Developer", 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <p className="m-8 text-justify sm:w-9/12 md:w-9/12 lg:w-6/12 mt-10 text-base-content">
            I am enthusiastic about technology and eager to create web-based
            application designs utilizing modern technologies. I am very
            interested in doing UI/UX Design and Web Development, and I am
            continuously improving my skills to become a great UI/UX Designer or
            a Web Developer in the IT industry. My passion is focused on
            designing and creating appealing interfaces for both web and mobile
            applications.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={routeToProjects}
            className="btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 rounded-2xl cursor-pointer ease-in-out duration-300 "
          >
            See my Projects
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
