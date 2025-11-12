import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experience = {
    company: "Deloitte",
    position: "Consultant",
    duration: "Aug 2019 - June 2024",
    projects: [
      {
        title: "Change Management",
        client: "Client: Top 3 global shipping and logistics leader based in the US with $90.2B in 2023 revenue",
        achievements: [
          "Executed change management frameworks to streamline migration of Finance operations in Oracle ERP by creating and tracking Project Charter, RACI Matrix, Work Breakdown Structure (WBS) and Risk Log using MS Excel.",
          "Directed the onboarding and upskilling of a 100-member global team, implementing training programs to support process migration, standardization and documentation.",
          "Led the development of 45 VBA-based automation solutions collaborating with Oracle analytics team, documented each in 6 project charters to reduce manual workload."
        ]
      },
      {
        title: "AP Automation",
        client: "Client: Large medical provider in the West Coast region of USA with $100.8B in 2023 revenue",
        achievements: [
          "Led the integration of ABBY OCR engine in the role of functional consultant translating business requirements into technical solutions. Spearheaded the implementation of machine learning for autonomous invoice field recognition.",
          "Achieved a touchless processing rate of ~70% (including new incoming vendors), detected $3 million in duplicate invoices with 100% automation, and optimized the MySQL database for enhanced performance.",
          "Developed a VBA-based tool to automate invoice status emails post-processing, pulling recipient contacts from the ERP vendor repository and attaching classified invoices with status indicators.",
          "Developed a Power BI (DAX) dashboard linked to a SQL database to track 22 KPIs and provide 24×7 real-time access to the client.",
          "Led a team of 18 members who planned, identified, and trained the machine on nearly 4,000 templates for automation, ensuring seamless support and training for the OCR machine learning system.",
          "Proposed and implemented vendor-level duplicate detection within the dashboard, reducing daily duplicate invoices by 20% and saving ~16 seconds of processing time per invoice through targeted outreach and process optimization."
        ]
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="work"
      className="work-experience"
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
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Work Experience
        </motion.h2>

        {/* Main Experience Card */}
        <motion.div
          variants={itemVariants}
          className="experience-card"
          style={{
            background: 'white',
            borderRadius: '15px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
            borderLeft: '4px solid #667eea'
          }}
          whileHover={{
            y: -5,
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#333',
                  marginBottom: '0.5rem'
                }}
              >
                {experience.company}
              </h3>
              <div
                style={{
                  fontSize: '1.2rem',
                  color: '#667eea',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}
              >
                {experience.position}
              </div>
            </div>
            <div
              style={{
                color: '#666',
                fontWeight: 500,
                fontSize: '1.1rem'
              }}
            >
              {experience.duration}
            </div>
          </div>

          {/* Projects */}
          <div className="projects">
            {experience.projects.map((project, projectIndex) => (
              <motion.div
                key={projectIndex}
                variants={itemVariants}
                style={{
                  marginBottom: projectIndex < experience.projects.length - 1 ? '3rem' : '0'
                }}
              >
                <motion.h4
                  whileHover={{ x: 10 }}
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '1rem',
                    cursor: 'default'
                  }}
                >
                  💼 {project.title}
                </motion.h4>

                <div
                  style={{
                    fontStyle: 'italic',
                    color: '#666',
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    background: 'rgba(102, 126, 234, 0.05)',
                    borderRadius: '8px',
                    borderLeft: '3px solid #667eea'
                  }}
                >
                  {project.client}
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}
                >
                  {project.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.8 }}
                      custom={achievementIndex}
                      whileHover={{
                        x: 10,
                        color: '#667eea'
                      }}
                      style={{
                        position: 'relative',
                        paddingLeft: '2rem',
                        marginBottom: '1.2rem',
                        lineHeight: 1.6,
                        color: '#555',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: '#667eea',
                          fontWeight: 'bold',
                          fontSize: '1.2rem'
                        }}
                      >
                        →
                      </span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Highlight */}
        <motion.div
          variants={itemVariants}
          style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}
        >
          <h4
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              color: '#333'
            }}
          >
            Key Technologies & Skills
          </h4>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center'
            }}
          >
            {['Oracle ERP', 'VBA', 'Power BI', 'SQL', 'Excel', 'Machine Learning', 'OCR', 'DAX', 'Project Management', 'Change Management'].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  padding: '0.5rem 1rem',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                  border: '1px solid rgba(102, 126, 234, 0.3)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: '#667eea',
                  fontWeight: '500'
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;