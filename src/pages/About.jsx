import React, { useState } from "react";
import Roald from "../assets/Roald_Photo.jpg";
import aboutSkills from "../data/aboutSkills.json";
import aboutWork from "../data/aboutWork.json";
import aboutEducation from "../data/aboutEducation.json";
import aboutAwards from "../data/aboutAwards.json";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ClipLoader from "react-spinners/ClipLoader";

const shapeClasses = [
  "rounded-2xl",
  "mask-squircle",
  "mask-heart",
  "mask-hexagon",
  "mask-decagon",
  "mask-pentagon",
  "mask-diamond",
  "mask-circle",
  "mask-star-2",
  "mask-triangle",
];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const [shapeClass, setShapeClass] = useState("rounded-2xl");

  const handleImageClick = () => {
    const randomIndex = Math.floor(Math.random() * shapeClasses.length);
    const newShapeClass = shapeClasses[randomIndex];
    setShapeClass(newShapeClass);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 700 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[url(./assets/backgrounds/layered-waves-haikei-2.svg)] bg-cover bg-center bg-no-repeat hero min-h-screen"
    >
      <motion.div
        className="hero-content flex-col lg:flex-row"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {!imageLoaded && (
          <div className="loader-container">
            <ClipLoader color={"#fff"} size={150} />
          </div>
        )}

        <Tilt>
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              src={Roald}
              alt="Roald Graduation Photo"
              className={`sm:max-w-sm md:max-w-md lg:max-w-wd shadow-2xl mask ${shapeClass}`}
              onClick={handleImageClick}
              onLoad={handleImageLoad}
            />
          </motion.div>
        </Tilt>

        <div className="m-14">
          <h1 className="text-4xl lg:text-5xl font-bold">About Me</h1>
          <p className="py-6 mb-5">
            I am an{" "}
            <span className="text-accent font-semibold">
              IT graduate specializing in Web and Mobile App Development
            </span>{" "}
            seeking an entry-level position in UI/UX Design or Web Development
            to further improve my personal growth and career, as well as provide
            great service to the company.
          </p>

          <div className="tabs gap-8">
            <a
              className={`tab text-lg tab-bordered ${
                activeTab === "skills" && "tab-active"
              }`}
              onClick={() => handleTabClick("skills")}
            >
              Skills
            </a>

            <a
              className={`tab text-lg tab-bordered ${
                activeTab === "workExperiences" && "tab-active"
              }`}
              onClick={() => handleTabClick("workExperiences")}
            >
              Work Experiences
            </a>

            <a
              className={`tab text-lg tab-bordered ${
                activeTab === "education" && "tab-active"
              }`}
              onClick={() => handleTabClick("education")}
            >
              Education
            </a>

            <a
              className={`tab text-lg tab-bordered ${
                activeTab === "awardsCertifications" && "tab-active"
              }`}
              onClick={() => handleTabClick("awardsCertifications")}
            >
              Awards & Certifications
            </a>
          </div>

          {/* Render the content based on the active tab */}
          {activeTab === "skills" && (
            <motion.div
              className="py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex flex-col ">
                {aboutSkills.skills.map((skill) => (
                  <motion.div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-200 m-2 shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <input type="checkbox" className="peer " />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-xl ">
                      {skill.title}{" "}
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
                      <p className="ml-5 mt-2"> {skill.desc} </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "workExperiences" && (
            <motion.div
              className="py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex flex-col">
                {aboutWork.works.map((work) => (
                  <motion.div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-200 m-2 shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <input type="checkbox" className="peer " />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-xl ">
                      {work.title}{" "}
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                      <div className="ml-5 mt-2">
                        <a
                          className="hover:text-blue-700 ease-in-out duration-300 italic"
                          href={work.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {work.company}
                        </a>
                        <p className=""> {work.date} </p>
                        <ul className="mt-2">
                          {Object.values(work.desc[0]).map((desc, index) => (
                            <li key={index}> - {desc} </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              className="py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex flex-col">
                {aboutEducation.educations.map((education) => (
                  <motion.div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-200 m-2 shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <input type="checkbox" className="peer " />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-xl ">
                      {education.title}{" "}
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
                      <div className="ml-5 mt-2">
                        <a
                          className="hover:text-blue-700 ease-in-out duration-300"
                          href={education.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {education.school}
                        </a>
                        <p> {education.date} </p>
                        <p> {education.desc} </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "awardsCertifications" && (
            <motion.div
              className="py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex flex-col">
                {aboutAwards.awards.map((award) => (
                  <motion.div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-200 m-2 shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <input type="checkbox" className="peer " />
                    <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-xl ">
                      {award.title}{" "}
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
                      <div className="ml-5 mt-2">
                        <p> {award.desc} </p>
                        <p> {award.issuer}</p>
                        <p> {award.date} </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
