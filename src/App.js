import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
