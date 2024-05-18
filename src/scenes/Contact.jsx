/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import Line from '../components/Line';

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const handleSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      id="contact"
      className="contact py-48"
    >
      {/* headings */}

      <div
        className="flex justify-end w-full"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-yellow">CONTACT ME </span>
            TO GET STARTED
          </p>
          <div className="flex md:justify-end  my-5">
            <Line
              width="w-1/2"
            />
          </div>
        </div>
      </div>
      <div
        className="md:flex md:justify-between gap-16"
      >
        <div
          className="basis-1/2 flex justify-center"
        >
          <img
            src="./assets/contactmeimg.AVIF"
            alt="contact"
            className="rounded-tr-[40px] rounded-bl-[40px] opacity-60 object-cover"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>
        <div
          className="basis-1/2 mt-10 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-offset="200"
        >
          <form
            target="_blank"
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mzbqjbed"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 rounded-xl outline-0"
              type="text"
              placeholder="Full Name"
              {...register('name', {
                required: true,
                maxlength: 50,
              })}
            />
            {errors.name && (
            <p className="text-red mt-1">
              {errors.name.type === 'required' && 'Please Enter Full Name *'}
              {errors.name.type === 'maxLength' && 'The maxlength is 50 char *'}

            </p>
            )}
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 rounded-xl outline-0"
              type="text"
              placeholder="EMAIL"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

              })}
            />
            {errors.email && (
            <p className="text-red mt-1">
              {errors.email.type === 'required' && 'Please Enter Email *'}
              {errors.email.type === 'pattern' && 'Please enter valid email address *'}

            </p>
            )}
            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 rounded-xl outline-0"
              type="text"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register('message', {
                required: true,
                maxLength: 1000,

              })}
            />
            {errors.message && (
            <p className="text-red mt-1">
              {errors.message.type === 'required' && 'Please Enter Your Message *'}
              {errors.message.type === 'maxLength' && 'The Message Max Length is 1000 *'}

            </p>
            )}
            <button
              type="submit"
              className="py-2 px-5 mt-4 rounded-xl bg-yellow text-deep-blue hover:bg-red hover:text-white transition duration-500"
            >
              Get in touch

            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
