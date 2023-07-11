import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
