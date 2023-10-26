import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => (
  <footer className="h-64 bg-red pt-10">
    <div className="w-5/6 mx-auto">
      <SocialMediaIcons />
      <div className="md:flex justify-center md:justify-between text-center">
        <p className="font-playfair font-semibold text-2xl text-yellow">
          Binod Bhusal
        </p>
        <p className="font-playfair text-md text-yellow">
          ©2023 Binod. All Rights Reserved.
          <br />
          binodreal1982@gmail.com
        </p>

      </div>
    </div>
  </footer>

);
export default Footer;
