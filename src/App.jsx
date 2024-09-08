import Intro from "./Sections/Intro";
import About from "./Sections/About";
import Education from "./Sections/Education";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";

function App() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12 sm:py-24 font-sans antialiased">
      <div className="flex flex-col space-y-10">
        <Intro />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
