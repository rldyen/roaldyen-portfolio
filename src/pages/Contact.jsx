import React from "react";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 700 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[url(./assets/backgrounds/layered-waves-haikei-4.svg)] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
    >
      <motion.div
        className="hero-content flex-col"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Me</h1>
        </div>

        <div className="text-center">
          <p className="text-md md:text-lg lg:text-lg text-justify mb-8 w-80 lg:w-auto md:w-auto ">
            Thank you for taking the time to look at my portfolio. I am
            passionate about creating, and I am always looking for new
            opportunities to collaborate, work on projects, or simply connect
            with others. Whether you are interested in a design endeavor, a
            creative partnership, or just a chat about shared interests, I am
            all ears.{" "}
            <span className="text-accent">
              Please feel free to reach out to me using the contact information
              provided.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:gap-12 md:flex-col lg:flex-row">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="card w-64 bg-neutral text-neutral-content"
          >
            <a
              className="card-body items-center text-center"
              href="mailto:roaldyen.soriano@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title m-2">
                <EmailIcon className="scale-150" />
              </div>
              <p>roaldyen.soriano@gmail.com</p>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="card w-64 bg-neutral text-neutral-content"
          >
            <a
              className="card-body items-center text-center"
              href="tel:09692986348"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title m-2">
                <PhoneAndroidIcon className="scale-150" />
              </div>
              <p>+63 969-298-6348</p>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="card w-64 bg-neutral text-neutral-content"
          >
            <a
              className="card-body items-center text-center"
              href="https://www.linkedin.com/in/roaldyen/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title m-2">
                <LinkedInIcon className="scale-150" />
              </div>
              <p>Roald Yen Soriano</p>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="card w-64 bg-neutral text-neutral-content"
          >
            <a
              className="card-body items-center text-center"
              href="https://github.com/rldyen"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-title m-2">
                <GitHubIcon className="scale-150" />
              </div>
              <p>rldyen</p>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
