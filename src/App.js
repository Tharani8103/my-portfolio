import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from './components/Education'; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}