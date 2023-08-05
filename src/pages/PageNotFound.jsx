import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PageNotFound() {
  return (
    <div className="hero min-h-screen bg-base-200">
        <motion.div 
            className="hero-content text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
            <div className="max-w-md">
                <h1 className="text-9xl font-bold m-4 text-error">404</h1>
                <h1 className="text-4xl font-bold">Page Not Found</h1>
                <p className="py-6">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <button className="btn-accent btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4 rounded-2xl cursor-pointer ease-in-out duration-300">
                    <Link to="/">Go back to Home</Link>
                    </button>
             </div>
        </motion.div>
    </div>
  )
}

export default PageNotFound