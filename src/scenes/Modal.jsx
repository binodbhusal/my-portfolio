import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { RiCloseLine } from 'react-icons/ri';

const Modal = ({ onClose, project }) => (
  <div className="modal-container">
    <div className="modal  md:max-w-[35rem]">
      <div className="modalHeader">
        <h2 className="modalTitle">{project.title}</h2>
        <RiCloseLine type="button" className="closeModal" onClick={onClose} />
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ clickable: true }}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {project.gallery.map((img) => (
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
            href={project.seelivelink}
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
            href={project.seesourcelink}
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
);

export default Modal;
