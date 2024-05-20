import React from 'react';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { TbBrandRedux } from 'react-icons/tb';
import { HiOutlineDatabase } from 'react-icons/hi';
import { SiRubyonrails, SiGnubash } from 'react-icons/si';
import { DiRubyRough, DiPhotoshop, DiTerminal } from 'react-icons/di';
import { BsGit } from 'react-icons/bs';
import { RiTestTubeLine } from 'react-icons/ri';
import { FiFigma } from 'react-icons/fi';

const Skills = () => (
  <div className="relative w-full min-h-dvh pb-14 border-t-3 border-white bg-deep-blue" id="skills">

    <div className="relative w-full h-full flex items-center flex-col">
      <div className="flex flex-wrap justify-center gap-8 mt-12 w-full max-w-[75rem] px-4">
        <div
          className="frontEnd"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-once="true"
          data-aos-offset="200"
        >
          <div className="flex flex-col items-center rounded-[31px] bg-gradient-to-b from-white-10 to-black-65 border-2 border-gray-700 shadow-xl backdrop-filter backdrop-blur-[4px] py-4 px-6 min-h-[23rem] w-full max-w-[28rem] text-center">
            <h2 className="animate-glow text-xl md:text-2xl font-bold pb-4 md:pb-0">front-end</h2>
            <p className="h-[6rem] flex justify-center items-center">
              transform design ideas into improved, visually captivating, and
              responsive interfaces, enhancing user experiences with innovative UI/UX solutions
            </p>
            <div className="w-full h-full rounded-b-[1rem] max-w-[20rem] flex flex-wrap p-[0.5rem] gap-[0.5rem] justify-center items-center">
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>HTML</p>
                <AiFillHtml5 className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>CSS</p>
                <FaCss3Alt className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>JS</p>
                <div className="svg flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>React</p>
                <FaReact className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>Redux</p>
                <TbBrandRedux className="redux flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="backEnd"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-once="true"
        >
          <div className="flex flex-col items-center rounded-[31px] bg-gradient-to-b from-white-10 to-black-65 border-2 border-gray-700 shadow-xl backdrop-filter backdrop-blur-[4px] py-4 px-6 min-h-[23rem] w-full max-w-[28rem] text-center">
            <h2 className="animate-glow text-xl md:text-2xl font-bold pb-4 md:pb-0">back-end</h2>
            <p className="h-[6rem] flex justify-center items-center">
              deliver software solutions via backend systems, incorporating robust software testing,
              reliable databases, and advanced functionalities
            </p>
            <div className="w-full h-full rounded-b-[1rem] max-w-[20rem] flex flex-wrap p-[0.5rem] gap-[0.5rem] justify-center items-center">
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>Ruby</p>
                <DiRubyRough className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>Rails</p>
                <SiRubyonrails className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>Git</p>
                <BsGit className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>Databases</p>
                <HiOutlineDatabase className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>Testing</p>
                <RiTestTubeLine className="redux flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="tools "
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="flex flex-col items-center rounded-[31px] bg-gradient-to-b from-white-10 to-black-65 border-2 border-gray-700 shadow-xl backdrop-filter backdrop-blur-[4px] py-4 px-6 min-h-[23rem] w-full max-w-[28rem] text-center">
            <h2 className="animate-glow text-xl pb-6 md:text-2xl font-bold  md:pb-0">design & tools</h2>
            <p className="h-[6rem] flex justify-center items-center pt-3 mb-6 md:mb-0">
              utilize various design & development tools to boost productivity,
              & enhance creative processes,
              ensuring effective project management & execution.
            </p>
            <div className="w-full h-full rounded-b-[1rem] max-w-[20rem] flex flex-wrap p-[0.5rem] gap-[0.5rem] justify-center items-center">
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>GitHub</p>
                <AiFillGithub className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>Bash</p>
                <SiGnubash className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>Ps</p>
                <DiPhotoshop className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>Figma</p>
                <FiFigma className="redux flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
              <div className="p-[0.25rem] flex flex-col justify-center items-center">
                <p>Terminal</p>
                <DiTerminal className="flex justify-center items-center bg-[#242424] border-1 border-[#292929] rounded-full w-[4rem] h-[4rem] p-[0.3rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
