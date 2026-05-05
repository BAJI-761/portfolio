import Hero from '../components/sections/Hero.jsx';
import FeaturedWork from '../components/sections/FeaturedWork.jsx';
import Experience from '../components/sections/Experience.jsx';
import PhilosophyCards from '../components/sections/PhilosophyCards.jsx';
import AboutPreview from '../components/sections/AboutPreview.jsx';
import MilestonesPreview from '../components/sections/MilestonesPreview.jsx';
import '../components/sections/Hero.css';

export default function Home() {
  const EMAIL = 'baji32456@gmail.com';

  return (
    <div className="container">
      <Hero email={EMAIL} />
      <FeaturedWork />
      <Experience />
      <PhilosophyCards />
      <AboutPreview />
      <MilestonesPreview />
    </div>
  );
}
