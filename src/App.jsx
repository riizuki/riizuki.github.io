import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from './context/ThemeContext';
import { LenisProvider } from './context/LenisContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Journal from './pages/Journal';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <ThemeProvider>
        <Loader />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <LenisProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="skills" element={<Skills />} />
              <Route path="certificates" element={<Certificates />} />
              <Route path="journal" element={<Journal />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </LenisProvider>
    </ThemeProvider>
  );
}

export default App;
