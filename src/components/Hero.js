import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const introText = "Hi, I'm Smita — a data-driven problem solver with a passion for turning complex business challenges into actionable insights. With experience spanning analytics consulting, marketing science, and operations strategy, I thrive at the intersection of business and technology.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.1, 0.9]
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.1, 0.9]
      }
    }
  };

  const name = "Smita Kulkarni";

  return (
    <motion.section
      id="home"
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '2rem'
      }}
    >
      {/* Background Animation */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1), transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1), transparent 50%)',
          zIndex: -1
        }}
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1), transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1), transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.1), transparent 50%), radial-gradient(circle at 20% 80%, rgba(118, 75, 162, 0.1), transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1), transparent 50%), radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1), transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        variants={itemVariants}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          zIndex: 1
        }}
      >
        {/* Animated Name */}
        <motion.h1
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.1
          }}
          animate={{
            backgroundPosition: ['0% 50%', '50% 50%', '100% 50%', '50% 50%', '0% 50%']
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {name.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              style={{
                display: 'inline-block',
                marginRight: letter === ' ' ? '0.3rem' : '0'
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Introduction Text */}
        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 400,
            marginBottom: '2rem',
            color: '#555',
            lineHeight: 1.4,
            maxWidth: '900px',
            margin: '0 auto 3rem auto'
          }}
        >
          {introText}
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#work');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: 'none',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
            }}
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: '600',
              border: '2px solid #667eea',
              borderRadius: '50px',
              background: 'transparent',
              color: '#667eea',
              cursor: 'pointer'
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            fontSize: '1.1rem',
            color: '#666'
          }}
        >
          <motion.a
            href="mailto:smitask244@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span>✉️</span> smitask244@gmail.com
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '2rem',
          color: '#667eea',
          cursor: 'pointer'
        }}
        onClick={() => {
          const element = document.querySelector('#work');
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        ↓
      </motion.div>
    </motion.section>
  );
};

export default Hero;