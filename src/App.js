import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Firstsection from './components/Firstsection';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header/>
      <Firstsection/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
