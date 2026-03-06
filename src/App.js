import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Firstsection from './components/Firstsection';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/project';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Firstsection/>
      <About/>
      <Skills/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
