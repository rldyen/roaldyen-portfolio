import React, { useState } from 'react'
import Roald from '../assets/Roald_Photo.jpg'
import aboutSkills from '../data/aboutSkills.json'
import aboutWork from '../data/aboutWork.json'
import aboutEducation from '../data/aboutEducation.json'
import aboutAwards from '../data/aboutAwards.json'
import { motion } from 'framer-motion';

export default function About() {

  const [activeTab, setActiveTab] = useState('skills');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="hero min-h-screen bg-base-200"
      >
        <motion.div 
          className="hero-content flex-col lg:flex-row"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
          }}>
            <img src={Roald} alt="Roald Graduation Photo" className="sm:max-w-sm md:max-w-md lg:max-w-wd rounded-3xl shadow-2xl" />
        
            <div className="m-8">
                <h1 className="text-5xl font-bold">About Me</h1>
                <p className="py-6 mb-5">I am an IT graduate specializing in Web and Mobile App Development seeking an entry-level position in UI/UX Design to further improve my personal growth and career, as well as provide great service to the company.</p>

                <div className="tabs gap-8">
                  <a
                    className={`tab text-xl tab-bordered ${activeTab === 'skills' && 'tab-active'}`}
                    onClick={() => handleTabClick('skills')}>
                    Skills
                  </a>

                  <a
                    className={`tab text-xl tab-bordered ${activeTab === 'workExperiences' && 'tab-active'}`}
                    onClick={() => handleTabClick('workExperiences')}>
                    Work Experiences
                  </a>

                  <a
                    className={`tab text-xl tab-bordered ${activeTab === 'education' && 'tab-active'}`}
                    onClick={() => handleTabClick('education')}>
                    Education
                  </a>

                  <a
                    className={`tab text-xl tab-bordered ${activeTab === 'awardsCertifications' && 'tab-active'}`}
                    onClick={() => handleTabClick('awardsCertifications')}>
                    Awards & Certifications
                  </a>
              </div>

              {/* Render the content based on the active tab */}
              {activeTab === 'skills' && (
                <motion.div 
                  className="py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  >
                  <div className="flex flex-col"> 
                    <ul>
                      {aboutSkills.skills.map((skill) => (
                        <li
                          className="pb-2"
                          key={skill.id}>
                          <p className='text-xl text-primary'> {skill.title} </p>
                          <p> {skill.desc} </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === 'workExperiences' && (
                <motion.div 
                  className="py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}>
                  <div className="flex flex-col"> 
                    <ul>
                      {aboutWork.works.map((work) => (
                        <li
                          className="pb-2"
                          key={work.id}>
                          <p className='text-xl text-primary'> {work.title} </p>
                          <a
                            className ="hover:text-secondary-focus ease-in-out duration-300 italic"
                            href = {work.link}
                            target="_blank" 
                            rel="noreferrer">{work.company}</a> 
                          <p> {work.date} </p>

                          <ul>
                          {Object.values(work.desc[0]).map((desc, index) => (
                            <li key={index}> - {desc} </li>
                          ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div 
                  className="py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}>
                  <div className="flex flex-col"> 
                    <ul>
                      {aboutEducation.educations.map((education) => (
                        <li
                          className="pb-2"
                          key={education.id}>
                          <p className='text-xl text-primary'> {education.title} </p>
                          <a
                            className ="hover:text-secondary-focus ease-in-out duration-300"
                            href = {education.link}
                            target="_blank" 
                            rel="noreferrer">{education.school}</a> 
                          <p> {education.date} </p>
                          <p> {education.desc} </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === 'awardsCertifications' && (
                <motion.div 
                  className="py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}>
                  <div className="flex flex-col"> 
                    <ul>
                      {aboutAwards.awards.map((award) => (
                        <li
                          className="pb-2"
                          key={award.id}>
                          <p className='text-xl text-primary'> {award.title} </p>
                          <p> {award.issuer}</p> 
                          <p> {award.date} </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
     </motion.div>
</div>
  )
}
