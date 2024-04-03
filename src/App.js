import './components/Global/Style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NavBar from './components/Global/NavBar/NavBar';
import Footer from './components/Global/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import AllSkills from './components/Skills/AllSkills';
import ScrollToTopButton from './components/Global/ScrollToTopButton/ScrollToTopButton';
import { ToastContainer } from 'react-toastify';
// import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AllSkills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;

