import NavBar from "./components/NavBar";
import Carousel from "./sections/Carousel";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Showcase />
      <Carousel />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
    </main>
  );
}

export default App;
