import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AcademicProjects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Wildfire Analysis",
      description: "Conducted analysis of wildfire patterns with data manipulation, geospatial visualization, and predictive modeling. Analyzed trends to forecast wildfire occurrences and inform resource allocation and mitigation strategies.",
      detailedDescription: "This project involved comprehensive data analysis of wildfire patterns across multiple regions, using advanced statistical methods and machine learning to predict future occurrences and optimize resource allocation.",
      tools: ["Python", "Geospatial Visualization", "Predictive Modeling", "Data Analysis"],
      university: "University of Washington",
      program: "Business Analytics June 2024 - June 2025",
      links: [
        { type: "Medium Article", url: "https://medium.com/@smitask244/burning-insights-how-data-reveals-the-future-of-wildfires-c56a0ff2f83d" }
      ]
    },
    {
      id: 2,
      title: "Market Basket Analysis",
      description: "Processed 100,000+ e-commerce transactions using Python for 7 Recency, Frequency, Monetary segments and identifying 42 association rules. Implemented Apriori algorithm with mlxtend to identify product correlations and cross-selling opportunities.",
      detailedDescription: "Large-scale analysis of e-commerce transaction data to identify meaningful patterns in customer purchasing behavior, enabling data-driven inventory and marketing decisions.",
      tools: ["Python", "Apriori Algorithm", "Machine Learning", "mlxtend", "RFM Analysis"],
      university: "University of Washington",
      program: "Business Analytics June 2024 - June 2025",
      links: [
        { type: "Medium Article", url: "https://medium.com/@smitask244/cracking-the-code-of-customer-behavior-our-dive-into-olists-data-2d25b877da54" }
      ]
    },
    {
      id: 3,
      title: "Cracking the Enchantment Lottery",
      description: "Developed an interactive Tableau dashboard analyzing the Enchantments Wilderness Permit Lottery, visualizing success rates by date, zone, and group size to inform strategic planning for outdoor enthusiasts.",
      detailedDescription: "Created sophisticated visualizations and statistical analyses of wilderness permit lottery data to help outdoor enthusiasts optimize their application strategies.",
      tools: ["Tableau", "Data Visualization", "Statistical Analysis", "Dashboard Development"],
      university: "University of Washington",
      program: "Business Analytics June 2024 - June 2025",
      links: [
        { type: "Tableau Dashboard", url: "https://public.tableau.com/app/profile/smita.sanjeev.kulkarni/viz/EnchantmentLotteryChances/Story1?publish=yes" }
      ]
    },
    {
      id: 4,
      title: "Capstone - Changing Tastes",
      description: "Forecasting U.S. Meat Consumption (2025-2040): Developed a SARIMAX-based time series model incorporating GDP, demographics, climate, and feed prices to predict per capita consumption of beef, pork, poultry, turkey, and fish.",
      detailedDescription: "Advanced time series forecasting project using econometric modeling to predict future meat consumption patterns based on multiple economic and demographic factors.",
      tools: ["SARIMAX", "Time Series Analysis", "R", "Econometric Modeling", "Forecasting"],
      university: "University of Washington",
      program: "Business Analytics June 2024 - June 2025",
      links: [
        { type: "Medium Article", url: "https://medium.com/@smitask244/forecasting-the-future-of-meat-in-america-how-we-used-time-series-modeling-to-predict-protein-b3aba64b4a16" }
      ]
    },
    {
      id: 5,
      title: "A.P. Møller - Mærsk A/S: Case Competition",
      description: "Champions, Russell Investments International Case Competition: Collaborated with a team to develop a winning research-driven strategy within 48 hours, presenting actionable solutions to industry experts.",
      detailedDescription: "High-pressure case competition requiring rapid analysis and strategic thinking to solve complex business challenges for a global shipping giant.",
      tools: ["Strategic Analysis", "Data Analytics", "Presentation Skills", "Business Intelligence"],
      university: "University of Washington",
      program: "Business Analytics June 2024 - June 2025",
      links: [
        { type: "Case Report", url: "https://drive.google.com/file/d/1Jiv4JDKEN1QRN_YsD59zGgBlvy7Mhb9x/view?usp=drive_link" }
      ]
    },
    {
      id: 6,
      title: "Detergent Pricing Strategy",
      description: "Trade Promotion ROI & Demand Modeling, Price Optimization Using Elasticity Modeling, Customer segmentation using PCA.",
      detailedDescription: "Comprehensive analysis of pricing strategies and demand patterns in the consumer goods industry using advanced statistical techniques.",
      tools: ["R", "Log-Linear Regression", "ROI Modeling", "PCA", "Excel Simulation"],
      university: "University of Washington",
      program: "Business Analytics June 2024 - June 2025"
    },
    {
      id: 7,
      title: "Predicting Click-Through Rates",
      description: "Optimizing Ad ROI using advanced machine learning techniques for ad performance prediction and optimization.",
      detailedDescription: "Machine learning project focused on predicting and optimizing digital advertising performance through sophisticated algorithmic approaches.",
      tools: ["R", "CART", "XGBoost", "AUC", "ROC Analysis", "ROI Modeling"],
      university: "University of Washington",
      program: "Business Analytics June 2024 - June 2025",
      links: [
        { type: "Project Analysis", url: "https://docs.google.com/document/d/1asKjPdBzrolxoJtxOvSs222E2gTs8vHo/edit?usp=drive_link&ouid=111449420635285988397&rtpof=true&sd=true" }
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      id="projects"
      className="academic-projects"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
        margin: '2rem auto',
        padding: '4rem 2rem',
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
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Academic Projects
        </motion.h2>

        <motion.div
          variants={itemVariants}
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            fontSize: '1.2rem',
            color: '#666'
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '0.5rem',
              color: '#333'
            }}
          >
            University of Washington
          </h3>
          <p>Business Analytics • June 2024 - June 2025</p>
        </motion.div>
        
        {/* Resume Link */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            marginBottom: '3rem'
          }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1AY35kFh04BleJk48OMjwpg8D1U6WQwE1/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.8rem 1.5rem',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              borderRadius: '25px',
              boxShadow: '0 5px 20px rgba(102, 126, 234, 0.3)'
            }}
          >
            <span>📄</span>
            View My Resume
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02
              }}
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              style={{
                background: 'white',
                borderRadius: '15px',
                padding: '2rem',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
                borderLeft: '4px solid #667eea',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Project Number Badge */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}
              >
                {project.id}
              </motion.div>

              <h3
                style={{
                  color: '#333',
                  marginBottom: '1rem',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  paddingRight: '2rem'
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: '#666',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                  fontSize: '0.95rem'
                }}
              >
                {expandedProject === project.id ? project.detailedDescription : project.description}
              </p>

              {/* Project Links */}
              {project.links && project.links.length > 0 && (
                <div
                  style={{
                    marginTop: '1rem',
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap'
                  }}
                >
                  {project.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.4rem 0.8rem',
                        background: 'rgba(102, 126, 234, 0.1)',
                        border: '1px solid rgba(102, 126, 234, 0.3)',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        color: '#667eea',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}
                    >
                      <span>{link.type === 'Tableau Dashboard' ? '📊' : link.type === 'Medium Article' ? '📝' : (link.type === 'Case Report' || link.type === 'Project Report' || link.type === 'Project Analysis') ? '📄' : '🔗'}</span>
                      {link.type}
                    </motion.a>
                  ))}
                </div>
              )}

              {/* Tools */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}
              >
                {project.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: 'linear-gradient(135deg, #667eea, #764ba2)',
                      color: 'white',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>

              {/* Expand/Collapse Indicator */}
              <motion.div
                animate={{ rotate: expandedProject === project.id ? 180 : 0 }}
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  fontSize: '1.2rem',
                  color: '#667eea'
                }}
              >
                ⌄
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          style={{
            marginTop: '4rem',
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            borderRadius: '15px',
            textAlign: 'center'
          }}
        >
          <h4
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '2rem',
              color: '#333'
            }}
          >
            Project Impact
          </h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#667eea',
                  marginBottom: '0.5rem'
                }}
              >
                100K+
              </div>
              <div
                style={{
                  color: '#666',
                  fontWeight: '500'
                }}
              >
                Data Points Analyzed
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#667eea',
                  marginBottom: '0.5rem'
                }}
              >
                7
              </div>
              <div
                style={{
                  color: '#666',
                  fontWeight: '500'
                }}
              >
                Advanced Projects
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#667eea',
                  marginBottom: '0.5rem'
                }}
              >
                15+
              </div>
              <div
                style={{
                  color: '#666',
                  fontWeight: '500'
                }}
              >
                Technologies Used
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AcademicProjects;