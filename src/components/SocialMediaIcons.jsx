import {
  FaLinkedin, FaGithub, FaMedium,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialMediaIcons = () => (
  <div className="flex justify-center md:justify-start my-10 gap-7">
    <a
      className="hover:opacity-50 transition duration-500"
      href="https://www.linkedin.com/in/binodbhusal/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin size={32} />
    </a>
    <a
      className="hover:opacity-50 transition duration-500"
      href="https://github.com/binodbhusal"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub size={32} />
    </a>
    <a
      className="hover:opacity-50 transition duration-500"
      href="https://twitter.com/Binod_ironLad"
      target="_blank"
      rel="noreferrer"
    >
      <FaXTwitter size={32} />
    </a>
    <a
      className="hover:opacity-50 transition duration-500"
      href="https://medium.com/@binodreal1982"
      target="_blank"
      rel="noreferrer"
    >
      <FaMedium size={32} />
    </a>
  </div>
);

export default SocialMediaIcons;
