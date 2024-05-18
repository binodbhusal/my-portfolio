import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import Line from './components/Line';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfpage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 400,
    });
  });
  return (
    <div className="app bg-deep-blue">

      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfpage={isTopOfpage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        { isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing selectedPage={selectedPage} />
      </div>
      <Line width="16" />
      <div className="w-5/6 mx-auto ">
        <MySkills selectedPage={selectedPage} />
      </div>
      <Line />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <Line />
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>
      <Footer />
    </div>

  );
}

export default App;
