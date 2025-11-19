import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.98)' 
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled 
          ? '0 4px 30px rgba(0, 0, 0, 0.15)' 
          : '0 2px 20px rgba(0, 0, 0, 0.05)',
        padding: '1rem 2rem',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            SK
          </span>
        </motion.div>

        <ul style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li>
            <a
              href="#home"
              style={{
                textDecoration: 'none',
                color: '#333',
                fontWeight: '500',
                position: 'relative',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#work"
              style={{
                textDecoration: 'none',
                color: '#333',
                fontWeight: '500',
                position: 'relative',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Work Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={{
                textDecoration: 'none',
                color: '#333',
                fontWeight: '500',
                position: 'relative',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1AY35kFh04BleJk48OMjwpg8D1U6WQwE1/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#333',
                fontWeight: '500',
                position: 'relative',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
              }}
            >
              📄 Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{
                textDecoration: 'none',
                color: '#333',
                fontWeight: '500',
                position: 'relative',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
              }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;