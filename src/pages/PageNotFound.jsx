import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HomeIcon from "@mui/icons-material/Home";

function PageNotFound() {
  const navigate = useNavigate();
  const routeToHome = () => {
    let path = "/";
    navigate(path);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 700 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[url(./assets/backgrounds/layered-waves-haikei-5.svg)] hero min-h-screen "
    >
      <motion.div
        className="hero-content text-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="max-w-md">
          <h1 className="text-9xl font-bold m-4 text-error">404</h1>
          <h1 className="text-4xl font-bold">Page Not Found</h1>
          <p className="py-6">
            The page you are looking for might have been removed, had its name
            changed, or is unavailable.
          </p>
          <motion.button
            onClick={routeToHome}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn-accent btn-md sm:btn-md md:btn-md lg:btn-lg mt-4 rounded-2xl cursor-pointer"
          >
            <div className="flex flex-row items-center">
              <HomeIcon />
              <div className="ml-2">Go back to Home</div>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PageNotFound;
