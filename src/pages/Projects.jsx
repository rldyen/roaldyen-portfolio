import React, { useState } from "react";
import ProjectUSTH from "../assets/projectUSTH.jpg";
import ProjectTeeHP from "../assets/projectTeeHP.jpg";
import ProjectBayanAcademy from "../assets/projectBayanAcademy.jpg";
import ProjectASEA from "../assets/projectASEA.jpg";
import ProjectUMatter from "../assets/projectUMatter.png";
import ProjectUSTracer from "../assets/projectUSTracer.jpg";
import ProjectEquipmentManagementSystem from "../assets/projectEquipmentManagementSystem.jpg";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import GitHubIcon from "@mui/icons-material/GitHub";

import { motion } from "framer-motion";

export default function Projects() {
  const [activeIndicator, setActiveIndicator] = useState(1); // Set the default active indicator

  // Function to handle indicator click
  const handleIndicatorClick = (indicatorNumber) => {
    setActiveIndicator(indicatorNumber);
  };

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
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-center mb-12">Projects Worked On</h1>

          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <figure>
                    <img
                      loading="lazy"
                      src={ProjectUSTH}
                      alt="UST Hospital Portal: Web-based Application for Clinical
                    Laboratory and Result Viewing"
                    />
                  </figure>
                </figure>

                <div className="card-body w-1/2">
                  <h2 className="card-title">
                    UST Hospital Portal: Web-based Application for Clinical
                    Laboratory and Result Viewing
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nemo alias sit pariatur beatae, autem consequatur molestiae officia dolore recusandae ea iste provident cumque fugiat dolor saepe neque dicta voluptatibus?</p>
                  <div className="card-actions justify-end items-center">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.figma.com/file/8nwh5QZw1YyNXFgep4VHCT/UST-Hospital-Portal?type=design&node-id=0%3A1&mode=design&t=6MyWj2NnUdXMscq2-1"
                    >
                      <DesignServicesIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                    </a>
                    <a
                      href="https://usth.vercel.app/"
                      className="btn btn-primary ease-in-out duration-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Live Website
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide7"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(7)}
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(2)}
                >
                  ❯
                </a>
              </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <figure>
                    <img
                      loading="lazy"
                      src={ProjectTeeHP}
                      alt="Web-based Application for Clothing Products using PHP"
                    />
                  </figure>
                </figure>

                <div className="card-body w-1/2">
                  <h2 className="card-title">
                    Web-based Application for Clothing Products using PHP
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nemo alias sit pariatur beatae, autem consequatur molestiae officia dolore recusandae ea iste provident cumque fugiat dolor saepe neque dicta voluptatibus?</p>
                  <div className="card-actions justify-end items-center">
                    <a
                      href="http://ec2-54-251-226-55.ap-southeast-1.compute.amazonaws.com/"
                      className="btn btn-primary ease-in-out duration-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Live Website
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide1"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(1)}
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(3)}
                >
                  ❯
                </a>
              </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <figure>
                    <img
                      loading="lazy"
                      src={ProjectBayanAcademy}
                      alt="Back-End Web Development 101 Final Project"
                    />
                  </figure>
                </figure>

                <div className="card-body w-1/2">
                  <h2 className="card-title">
                    Back-End Web Development 101 Final Project
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nemo alias sit pariatur beatae, autem consequatur molestiae officia dolore recusandae ea iste provident cumque fugiat dolor saepe neque dicta voluptatibus?</p>
                  <div className="card-actions justify-end items-center">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/rldyen/backend-101-beginners-finalproject"
                    >
                      <GitHubIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide2"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(2)}
                >
                  ❮
                </a>
                <a
                  href="#slide4"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(4)}
                >
                  ❯
                </a>
              </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <figure>
                    <img
                      loading="lazy"
                      src={ProjectASEA}
                      alt="ASEA iWork Builders Co."
                    />
                  </figure>
                </figure>

                <div className="card-body w-1/2">
                  <h2 className="card-title">
                    Web-based Appointment System for ASEA iWork Builders Co.
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nemo alias sit pariatur beatae, autem consequatur molestiae officia dolore recusandae ea iste provident cumque fugiat dolor saepe neque dicta voluptatibus?</p>
                  <div className="card-actions justify-end items-center">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.figma.com/file/BfI6nBssa7nObmTuJS8MjB/ASEA?type=design&node-id=0%3A1&mode=design&t=qFy8o3g4uFdwFsPN-1"
                    >
                      <DesignServicesIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                    </a>
                    <a
                      href="https://asea-iwork-builders-co.vercel.app/home"
                      className="btn btn-primary ease-in-out duration-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Live Website
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  loading="lazy"
                  href="#slide3"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(3)}
                >
                  ❮
                </a>
                <a
                  loading="lazy"
                  href="#slide5"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(5)}
                >
                  ❯
                </a>
              </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <figure>
                    <img
                      loading="lazy"
                      src={ProjectUMatter}
                      alt="UMatter: A Mobile Application for Mood Tracking"
                    />
                  </figure>
                </figure>

                <div className="card-body w-1/2">
                  <h2 className="card-title">
                    UMatter: A Mobile Application for Mood Tracking
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nemo alias sit pariatur beatae, autem consequatur molestiae officia dolore recusandae ea iste provident cumque fugiat dolor saepe neque dicta voluptatibus?</p>
                  <div className="card-actions justify-end items-center">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/rldyen/UMatter_MobileApplication"
                    >
                      <GitHubIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide4"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(4)}
                >
                  ❮
                </a>
                <a
                  loading="lazy"
                  href="#slide6"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(6)}
                >
                  ❯
                </a>
              </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <figure>
                    <img
                      loading="lazy"
                      src={ProjectUSTracer}
                      alt="USTracer: A Web-based Contract Tracing Application"
                    />
                  </figure>
                </figure>

                <div className="card-body w-1/2">
                  <h2 className="card-title">
                    USTracer: A Web-based Contract Tracing Application
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nemo alias sit pariatur beatae, autem consequatur molestiae officia dolore recusandae ea iste provident cumque fugiat dolor saepe neque dicta voluptatibus?</p>
                  <div className="card-actions justify-end items-center">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/rldyen/USTracer_FinalProject"
                    >
                      <GitHubIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide5"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(5)}
                >
                  ❮
                </a>
                <a
                  href="#slide7"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(7)}
                >
                  ❯
                </a>
              </div>
            </div>

            <div id="slide7" className="carousel-item relative w-full">
              <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <figure>
                    <img
                      loading="lazy"
                      src={ProjectEquipmentManagementSystem}
                      alt="Equipment Management System using PHP"
                    />
                  </figure>
                </figure>

                <div className="card-body w-1/2">
                  <h2 className="card-title">
                    Equipment Management System using PHP
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae nemo alias sit pariatur beatae, autem consequatur molestiae officia dolore recusandae ea iste provident cumque fugiat dolor saepe neque dicta voluptatibus?</p>
                  <div className="card-actions justify-end items-center">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/rldyen/Equipment_Management_System_FinalProject"
                    >
                      <GitHubIcon className="m-4 hover:text-secondary ease-in-out duration-300" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide6"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(6)}
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle hover:scale-125 ease-in-out duration-300 hover:bg-secondary"
                  onClick={() => handleIndicatorClick(1)}
                >
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div class="flex justify-center w-full py-2 gap-2 mt-4">
            <a
              href="#slide1"
              className={`btn btn-s ease-in-out duration-300 hover:bg-secondary ${
                activeIndicator === 1 ? "bg-primary" : ""
              }`}
              onClick={() => handleIndicatorClick(1)}
            >
              1
            </a>

            <a
              href="#slide2"
              className={`btn btn-s ease-in-out duration-300 hover:bg-secondary ${
                activeIndicator === 2 ? "bg-primary" : ""
              }`}
              onClick={() => handleIndicatorClick(2)}
            >
              2
            </a>

            <a
              href="#slide3"
              className={`btn btn-s ease-in-out duration-300 hover:bg-secondary  ${
                activeIndicator === 3 ? "bg-primary" : ""
              }`}
              onClick={() => handleIndicatorClick(3)}
            >
              3
            </a>

            <a
              href="#slide4"
              className={`btn btn-s ease-in-out duration-300 hover:bg-secondary  ${
                activeIndicator === 4 ? "bg-primary" : ""
              }`}
              onClick={() => handleIndicatorClick(4)}
            >
              4
            </a>

            <a
              href="#slide5"
              className={`btn btn-s ease-in-out duration-300 hover:bg-secondary  ${
                activeIndicator === 5 ? "bg-primary" : ""
              }`}
              onClick={() => handleIndicatorClick(5)}
            >
              5
            </a>

            <a
              href="#slide6"
              className={`btn btn-s ease-in-out duration-300 hover:bg-secondary  ${
                activeIndicator === 6 ? "bg-primary" : ""
              }`}
              onClick={() => handleIndicatorClick(6)}
            >
              6
            </a>

            <a
              href="#slide7"
              className={`btn btn-s ease-in-out duration-300 hover:bg-secondary  ${
                activeIndicator === 7 ? "bg-primary" : ""
              }`}
              onClick={() => handleIndicatorClick(7)}
            >
              7
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
