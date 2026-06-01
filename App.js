import './App.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <About />
        <Education />
        <Experience />
        <Achievements />
        <Skills />
        <Counter />
      </div>
    </div>
  );
}

export default App;