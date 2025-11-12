import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="contact"
      className="contact"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
        margin: '2rem auto',
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '1200px'
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.h2
          variants={itemVariants}
          className="section-title"
          style={{
            fontSize: '3rem',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '1.2rem',
            color: '#e0e0e0',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            lineHeight: 1.6
          }}
        >
          I'm always interested in hearing about new opportunities and exciting projects. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </motion.p>

        {/* Contact Information Cards */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <div
              style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}
            >
              📧
            </div>
            <h3
              style={{
                color: '#667eea',
                marginBottom: '0.5rem',
                fontSize: '1.2rem',
                fontWeight: 600
              }}
            >
              Email
            </h3>
            <motion.a
              href="mailto:smitask244@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                color: '#555',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}
            >
              smitask244@gmail.com
            </motion.a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <div
              style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}
            >
              📱
            </div>
            <h3
              style={{
                color: '#667eea',
                marginBottom: '0.5rem',
                fontSize: '1.2rem',
                fontWeight: 600
              }}
            >
              Phone
            </h3>
            <motion.a
              href="tel:+12062942435"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                color: '#555',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}
            >
              +1 (206) 294-2435
            </motion.a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            style={{
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease'
            }}
          >
            <div
              style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}
            >
              💼
            </div>
            <h3
              style={{
                color: '#667eea',
                marginBottom: '0.5rem',
                fontSize: '1.2rem',
                fontWeight: 600
              }}
            >
              LinkedIn
            </h3>
            <motion.a
              href="https://linkedin.com/in/smitakulkarni-13"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                color: '#667eea',
                textDecoration: 'none',
                fontSize: '1.1rem',
                borderBottom: '1px solid rgba(102, 126, 234, 0.3)'
              }}
            >
              linkedin.com/in/smitakulkarni-13
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          style={{
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'white',
              padding: '2.5rem',
              borderRadius: '15px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)'
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                whileFocus={{ scale: 1.02 }}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                whileFocus={{ scale: 1.02 }}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="5"
                whileFocus={{ scale: 1.02 }}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1rem',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  resize: 'vertical'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              style={{
                width: '100%',
                padding: '1.2rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                border: 'none',
                borderRadius: '10px',
                background: isSubmitting 
                  ? '#ccc' 
                  : 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 5px 20px rgba(102, 126, 234, 0.3)'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'rgba(102, 126, 234, 0.1)',
                  border: '1px solid #667eea',
                  borderRadius: '8px',
                  color: '#667eea',
                  fontWeight: '500'
                }}
              >
                {submitMessage}
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;