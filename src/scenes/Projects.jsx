/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { RiCloseLine } from 'react-icons/ri';
import Line from '../components/Line.jsx';
import ProjectData from '../components/ProjectData.js';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="pt-48 pb-48 overflow-x-hidden">
      {/* heading */}

      <div className="w-full md:2/4  mx-auto p-[2rem] text-white text-[1rem] text-center z-0 md:w-2/4">
        <p
          className="font-playfair font-semibold text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <span className="text-red ">PRO</span>
          JECTS
        </p>
        <div className="flex justify-center mt-5">
          <Line
            width="w-1/3"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
        <p
          className="mt-10 mb-7 text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-offset="200"
        >
          Having a well-demonstrated history
          of crafting exceptionally efficient web applications for the worldwide market.
        </p>
      </div>
      {/* projects section  */}

      <div className=" w-full max-auto grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2
        lg:grid-cols-3 flex  flex-col justify-center items-center  gap-8"
      >
        {ProjectData.map((project) => (
          <div
            className="h-[22rem] max-h-[22rem] min-w-[20rem] max-w-full flex justify-center
            items-center flex-col overflow-hidden bg-[#4d4d4d59]
            border-[2px] border-gray-700 rounded-b-[25px] overflow-x-hidden"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="200"
            key={project.id}
          >
            <div className={`projectSubCont ${project.id}`}>
              <div className="projectImg" style={{ backgroundImage: `url(${project.imageUrl})` }} />
              <h2 className="projectTitle">{project.title}</h2>
              <ul className="projectTechs">
                {project.tech.map((tech) => (
                  <li key={tech.id} className="tech">{tech}</li>
                ))}
              </ul>
              <span className="projectDesc text-base line-clamp-3 overflow-hidden">{project.description}</span>
              <ul className="projectLinks  lg:mx-auto lg:w-2/3">
                <li className="projectLink">
                  <a
                    href={project.seelivelink}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    Live Demo
                  </a>
                  <div className="linkBefore"> </div>

                </li>
                <li className="projectLink">
                  <a
                    href={project.seesourcelink}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                  <div className="linkBefore"> </div>
                </li>
                <li className="projectLink">
                  <button onClick={() => openModal(project)} className="galleryBtn bg-transparent" type="button">
                    Gallery
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ))}
        { selectedProject && (
          <div className="modal-container">
            <div className="modal  md:max-w-[35rem]">
              <div className="modalHeader">
                <h2 className="modalTitle">{selectedProject.title}</h2>
                <RiCloseLine type="button" className="closeModal" onClick={closeModal} />
              </div>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{ clickable: true }}
                loop="true"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                {selectedProject.gallery.map((img) => (
                  <SwiperSlide key={img.id}>
                    <img className="modalImg" src={img} alt="gallery" loading="lazy" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <ul className="flex justify-center items-center gap-3">
                <li className=" bg-red  px-6 text-blue-500  hover:bg-blue ml-4 text-gray-200 bg-red py-1 px-2
                    rounded-lg text-center transition duration-500"
                >
                  <a
                    href={selectedProject.seelivelink}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    Live Demo
                  </a>
                </li>
                <li className="text-blue-500 hover:bg-blue transition duration-500
                        text-gray-200 bg-red py-1 px-3 rounded-lg items-center"
                >
                  <a
                    href={selectedProject.seesourcelink}
                    className="link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
