import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 700 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[url(./assets/backgrounds/layered-waves-haikei-4.svg)] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
    ></motion.div>
  );
}

export default Contact;
