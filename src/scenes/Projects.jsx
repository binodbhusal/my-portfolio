/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import ProjectData from '../components/ProjectData';

import Line from '../components/Line';

const Projects = () => {
  const [hoveredIndex] = useState(null);

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* heading */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="mt-[-20]">
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red ">PRO</span>
            JECTS
          </p>
          <div className="flex justify-center mt-5">
            <Line width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-7 text-lg">
          With a proven track record of developing highly efficient software
          applications for the global market.
        </p>
      </motion.div>
      {/* projects section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectData.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative rounded-lg shadow-lg">
              <div
                className="h-64 w-full bg-cover bg-center rounded-lg shadow-lg text-center relative"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              >
                <h2 className="text-2xl font-semibold mt-4 bg-blue rounded-t-lg">
                  {project.title}
                </h2>
                <motion.div
                  className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-0 
                  hover:opacity-90 transition duration-500 
                  transform ${hoveredIndex === index ? 'scaleY(1)' : 'scaleY(0)'}`}
                >
                  <p className="text-gray-200 mt-2 p-4">
                    {project.description}
                  </p>
                  <div className="p-4">
                    <p className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 text-sm font-semibold bg-grey text-red py-1 rounded-lg text-center">

                      {' '}
                      {project.tech}
                    </p>
                    <div className="mt-2">
                      <a
                        href={project.seelivelink}
                        className="absolute bottom-1 left-16 text-blue-500 hover:bg-blue transition duration-500
                        text-gray-200 bg-red py-1 px-3 rounded-xl items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>

                      <a
                        href={project.seesourcelink}
                        className="absolute bottom-1  right-16 text-blue-500  hover:bg-blue ml-4 text-gray-200 bg-red py-1 px-2
                         rounded-xl text-center transition duration-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
