import NavBar from "./components/NavBar";
import Carousel from "./sections/Carousel";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Showcase />
      <Carousel />
      <FeatureCards />
    </main>
  );
}

export default App;
