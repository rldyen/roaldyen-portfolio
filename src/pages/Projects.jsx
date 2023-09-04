import React from "react";
import ProjectUSTH from "../assets/projectUSTH.jpg";
import ProjectInventory from "../assets/projectInventory.png";
import ProjectBayanAcademy from "../assets/projectBayanAcademy.jpg";
import ProjectASEA from "../assets/projectASEA.jpg";
import ProjectUMatter from "../assets/projectUMatter.png";
import ProjectUSTracer from "../assets/projectUSTracer.jpg";
import ProjectEquipmentManagementSystem from "../assets/projectEquipmentManagementSystem.jpg";
import ProjectRiskScape from "../assets/projectRiskScape.png"
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import GitHubIcon from "@mui/icons-material/GitHub";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 700 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[url(./assets/backgrounds/layered-waves-haikei-3.svg)] bg-cover bg-center bg-no-repeat hero min-h-screen"
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Projects Worked On
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mask mask-squircle"
            >
              <div className="h-96 w-80">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  src={ProjectUSTH}
                  alt="UST Hospital Portal"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-focus group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[45%] group-hover:translate-y-0 transition-all">
                <h1 className="text-xl font-bold text-white">
                  UST Hospital Portal
                </h1>

                <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  A Web-based Application for Clinical Laboratory and Result
                  Viewing
                </p>
                <a
                  href="https://usth.vercel.app/"
                  className="btn btn-primary ease-in-out duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Website
                </a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/file/8nwh5QZw1YyNXFgep4VHCT/UST-Hospital-Portal?type=design&node-id=0%3A1&mode=design&t=6MyWj2NnUdXMscq2-1"
                >
                  <DesignServicesIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mask mask-squircle"
            >
              <div className="h-96 w-80">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  src={ProjectInventory}
                  alt="Inventory Management Systems"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-focus group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[35%] group-hover:translate-y-0 transition-all">
                <h1 className="text-xl font-bold text-white">
                  Inventory Management Systems
                </h1>

                <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Three designs for an Inventory Management System
                </p>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/file/IMAJsA9wpqDU4AfSICLy8E/Inventory-Monitoring-System-(3-Designs)?type=design&node-id=0%3A1&mode=design&t=6y2sxAWu5DKGcaXS-1"
                >
                  <DesignServicesIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mask mask-squircle"
            >
              <div className="h-96 w-80">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  src={ProjectRiskScape}
                  alt="RiskScape (Revamp)"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-focus group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[35%] group-hover:translate-y-0 transition-all">
                <h1 className="text-xl font-bold text-white">
                  RiskScape (Revamp)
                </h1>

                <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Revamping of an Application for Assessing Disasters
                </p>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/file/lnbQPpk1CoGxPAQxrluW6V/RiskScape-(Revamp)?type=design&node-id=0%3A1&mode=design&t=8CohpEI0ENY8AhwF-1"
                >
                  <DesignServicesIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mask mask-squircle"
            >
              <div className="h-96 w-80">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  src={ProjectBayanAcademy}
                  alt="Back-End Web Development 101 Final Project"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-focus group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[35%] group-hover:translate-y-0 transition-all">
                <h1 className="text-xl font-bold text-white">
                  Back-End Web Development 101 Final Project
                </h1>

                <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  A Project of Bayan Academy's One Plan for Labor Alignment
                </p>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/rldyen/backend-101-beginners-finalproject"
                >
                  <GitHubIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mask mask-squircle"
            >
              <div className="h-96 w-80">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  src={ProjectASEA}
                  alt="ASEA iWork Builders Co."
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-focus group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[45%] group-hover:translate-y-0 transition-all">
                <h1 className="text-xl font-bold text-white">
                  ASEA iWork Builders Co.
                </h1>

                <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  A Web-based Appointment System for ASEA iWork Builders Co.
                </p>
                <a
                  href="https://asea-iwork-builders-co.vercel.app/home"
                  className="btn btn-primary ease-in-out duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Website
                </a>

                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.figma.com/file/BfI6nBssa7nObmTuJS8MjB/ASEA?type=design&node-id=0%3A1&mode=design&t=qFy8o3g4uFdwFsPN-1"
                >
                  <DesignServicesIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mask mask-squircle"
            >
              <div className="h-96 w-80">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  src={ProjectUMatter}
                  alt="UMatter: A Mobile Application for Mood Tracking"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-focus group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[35%] group-hover:translate-y-0 transition-all">
                <h1 className="text-xl font-bold text-white">UMatter</h1>

                <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  A Mobile Application for Mood Tracking
                </p>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/rldyen/UMatter_MobileApplication"
                >
                  <GitHubIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mask mask-squircle"
            >
              <div className="h-96 w-80">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  src={ProjectUSTracer}
                  alt="USTracer: A Web-based Contract Tracing Application"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-focus group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[35%] group-hover:translate-y-0 transition-all">
                <h1 className="text-xl font-bold text-white">USTracer</h1>

                <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  A Web-based Contract Tracing Application
                </p>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/rldyen/USTracer_FinalProject"
                >
                  <GitHubIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mask mask-squircle"
            >
              <div className="h-96 w-80">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  src={ProjectEquipmentManagementSystem}
                  alt="Equipment Management System using PHP"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-focus group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[35%] group-hover:translate-y-0 transition-all">
                <h1 className="text-xl font-bold text-white">
                  Equipment Management System
                </h1>

                <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  An Equipment Management System made using PHP and MySQL
                </p>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/rldyen/Equipment_Management_System_FinalProject"
                >
                  <GitHubIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
