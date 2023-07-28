import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Box } from "@chakra-ui/react";
import ProjectSection from "./components/ProjectSection";

const App = () => {
  return (
    <Box bgColor="#d8eefe" px="6.25rem">
      <Header />
      <HeroSection />
      <AboutMe />
      <ProjectSection />
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
