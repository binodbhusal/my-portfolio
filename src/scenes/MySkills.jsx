import { motion } from 'framer-motion';

import {
  FaReact,
} from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { BiLogoNetlify } from 'react-icons/bi';
import Line from '../components/Line';
import useMediaQuery from '../hooks/useMediaQuery';

const MySkills = () => {
  const isAboveLargeScreens = useMediaQuery('(min-width:1060px)');
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* header and image section  */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">

        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl">
            MY
            {' '}
            <span className="text-red ">SKILLS</span>
          </p>
          <Line width="w-48 mt-5" />
          <p className="mt-10 mb-7 text-lg">
            With a proven track record of developing highly efficient software
            applications for the global
            market, I bring over 1,300 hours of hands-on experience to the table. My background also
            includes mentoring and leading teams of
            junior developers to successfully achieve concrete
            goals within tight deadlines.
          </p>

          <a
            className="bg-gradient-rainblue text-deep-blue rounded-lg py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            href="./assets/binod_resume_final.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Get My Resume
          </a>

        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLargeScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 bg-opacity-70 filter saturate-100 hue-rotate-15 "
                src="assets/skills3.png"
              />

            </div>
          ) : (
            <img
              alt="skills"
              className="z-10"
              src="./assets/skills3.png"
            />
          )}

        </div>
      </div>
      {/* skills  */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* skills */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">Frontend</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] rounded-lg">
              <span className="flex">
                <FaReact size={32} className="mt-10 ml-5 bg-deep-blue" />
              </span>

            </div>
          </div>
          <span className="mt-5 flex flex-wrap gap-2 md:flex-row   md:gap-1">
            <p className="bg-grey  px-1.5 py-0.5 text-black rounded-lg">React</p>
            <p className="bg-grey px-2 py-0.5 text-black rounded-lg">JavaScript</p>
            <p className="bg-grey px-2 py-0.5 text-black rounded-lg">Redux</p>
            <p className="bg-grey  px-2 py-0.5 text-black rounded-lg">HTML/CSS</p>
          </span>

        </motion.div>
        {/* skills */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">Backend</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1] rounded-lg">
              <span className="flex">
                <DiRuby size={32} className="mt-10 ml-5 bg-deep-blue rounded-lg" />

              </span>

            </div>
          </div>
          <span className="mt-5 flex flex-wrap gap-2 md:flex-row   md:gap-1">
            <p className="bg-grey  text-black px-2 py-0.5 rounded-lg">Ruby</p>
            <p className="bg-grey  text-black px-2 py-0.5 rounded-lg">Rails </p>
            <p className="bg-grey  text-black px-2 py-0.5 rounded-lg">Restful API</p>
            <p className="bg-grey   text-black px-2 py-0.5 rounded-lg">PostgreSQL</p>
          </span>

        </motion.div>
        {/* skills */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">Tools Methods</p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] rounded-lg">
              <span className="flex">
                <BiLogoNetlify size={32} className="mt-10 ml-5 bg-deep-blue rounded-lg" />

              </span>

            </div>
          </div>
          <span className="mt-5 flex flex-wrap md:flex-row gap-2  md:gap-1">
            <p className="bg-grey text-black px-2.5 py-0.5 rounded-lg">Git</p>
            <p className="bg-grey  text-black px-2.5 py-0.5 rounded-lg">Github</p>
            <p className="bg-grey  text-black px-2.5 py-0.5 rounded-lg">RSpec</p>
            <p className="bg-grey  text-black px-2.5 py-0.5 rounded-lg">Heroku/Netlify</p>
          </span>
        </motion.div>
      </div>

    </section>
  );
};
export default MySkills;
