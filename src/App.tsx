import NavBar from "./components/NavBar";
import Carousel from "./sections/Carousel";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";

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
    </main>
  );
}

export default App;
