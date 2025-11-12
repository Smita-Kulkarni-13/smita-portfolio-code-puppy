import React from 'react';
import {
  motion,
  useScroll,
  useSpring
} from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import AcademicProjects from './components/AcademicProjects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
      <Navigation />
      <Hero />
      <WorkExperience />
      <AcademicProjects />
      <Contact />
      
      <footer className="footer">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© 2024 Smita Kulkarni. Built with ❤️ and React</p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;