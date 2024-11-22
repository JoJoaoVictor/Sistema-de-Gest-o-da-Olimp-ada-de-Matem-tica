
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
/*pages*/
import Home from './components/pages/Home/Home.js';
import NewProject from './components/pages/NewProject.js';
import Project from './components/pages/Projects.js';
import Usuario from './components/pages/Usuario.js';
/*Layout*/ 
import Container from './components/Layout/Container.js';
import Navbar from './components/Layout/Navbar.js';
import Footer from './components/Layout/Footer.js';
/*Swiper*/ 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
