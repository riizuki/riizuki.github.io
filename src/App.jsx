import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth momentum scrolling
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    // Show loader for a duration that allows the animation to play
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => {
      clearTimeout(timer);
      lenis.destroy();
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
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
