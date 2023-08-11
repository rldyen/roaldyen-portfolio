import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 700 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[url(./assets/backgrounds/layered-waves-haikei-4.svg)] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
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
        
        <h1 className="text-5xl font-bold">Coming Soon</h1>
      </motion.div>


    </motion.div>

  );
}

export default Contact;
