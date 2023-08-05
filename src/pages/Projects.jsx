import React from 'react'
import ProjectUSTH from '../assets/projectUSTH.jpg'   
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="hero min-h-screen bg-base-200">
        <motion.div 
            className="hero-content"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={ProjectUSTH} alt="USTH" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
            
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div> 
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>

            
        </motion.div>
        
    </div>
  )
}
