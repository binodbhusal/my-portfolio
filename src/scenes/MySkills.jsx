import Line from '../components/Line';
import Skills from './Skills';

const MySkills = () => (
  <section id="skills" className="pt-10 pb-24">
    {/* header and image section  */}
    <div className="md:flex md:justify-between md:gap-16 mt-32">

      <div
        className="md:w-1/2"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-offset="200"
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
          market, I bring over 3 years of hands-on experience to the table. My background also
          includes mentoring and leading teams of
          junior developers to successfully achieve concrete
          goals within tight deadlines.
        </p>

        <a
          className="bg-gradient-rainblue text-deep-blue rounded-lg py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
          href="./assets/Binod_Bhusal_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-down-right"
          data-aos-delay="150"
        >
          Get My Resume
        </a>

      </div>

      <div
        className="mt-16 md:mt-0 w-full"
      >

        <img
          alt="skills"
          className="w-full "
          src="assets/skills4.jpg"
          data-aos="fade-up"
          data-aos-delay="200"
        />

      </div>
    </div>
    {/* skills  */}
    <div className="md:flex md:justify-between mt-16 gap-32">
      {/* skills */}
      <Skills />
      {/* skills */}
    </div>

  </section>
);
export default MySkills;
