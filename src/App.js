import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
