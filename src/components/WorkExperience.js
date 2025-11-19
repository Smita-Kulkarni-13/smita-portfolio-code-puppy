import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Wal-Mart",
      position: "Senior Data Analyst",
      duration: "Aug 2025 – Present",
      location: "Bentonville, AR",
      achievements: [
        "Reduced empty miles by 320 bps by analyzing transportation data using BigQuery (SQL) and Python, identifying a dispatch optimization opportunity.",
        "Built a three-KPI health metric for the optimizer engine, implemented the logic in BigQuery, created a Tableau dashboard, and set up an email alert system that triggered on unusual KPI behavior.",
        "Developed an internal AI Q&A agent using Walmart's agentic AI tool, hosted on a VM, consolidating dispatch-optimization documentation to enable quick, self-serve answers for internal teams."
      ],
      skills: ["BigQuery", "SQL", "Python", "Tableau", "AI/ML", "Data Analysis", "Transportation Analytics"]
    },
    {
      company: "Changing Tastes",
      position: "Data Scientist",
      duration: "April 2025 – June 2025",
      location: "Seattle, WA",
      achievements: [
        "Built time series–based SARIMAX models achieving <2% mean average percentage error for key categories, incorporating demographic trends, feed costs, and climate variables to assess demand drivers.",
        "Designed and executed scenario modeling, including simulating a 20% demand surge, to evaluate potential impacts on supply chains and inform strategic policy recommendations."
      ],
      skills: ["SARIMAX", "Time Series Analysis", "Predictive Modeling", "Scenario Analysis", "Supply Chain Analytics"]
    },
    {
      company: "UW Medicine",
      position: "Student Business Analyst",
      duration: "Aug 2024 – Jan 2025",
      location: "Seattle, WA",
      achievements: [
        "Analyzed event registration data through PowerBI dashboard to identify attendee trends and peak sign-up periods, informing targeted marketing strategies that boosted engagement by 10%.",
        "Evaluated website traffic using Google Analytics to uncover user behavior patterns, enabling data-driven adjustments to marketing campaigns and increasing click-through rates."
      ],
      skills: ["Power BI", "Google Analytics", "Data Visualization", "Marketing Analytics", "Web Analytics"]
    },
    {
      company: "Deloitte",
      position: "Consultant",
      duration: "Aug 2019 – May 2024",
      location: "Bangalore, India",
      achievements: [
        "Led an 18-member team to train ABBYY's ML-enhanced OCR engine using 4,000 invoice templates, achieving 70% touchless processing and enabling 100% automation in duplicate detection—resulting in $3M in cost savings.",
        "Developed a VBA-based tool to automate invoice status emails post-processing, pulling recipient contacts from the ERP vendor repository and attaching classified invoices with status indicators.",
        "Developed a Power BI (DAX) dashboard linked to a SQL database to track 22 KPIs and provide 24×7 real-time access to the client.",
        "Proposed and implemented vendor-level duplicate detection within the dashboard, reducing daily duplicate invoices by 20% and saving ~16 seconds of processing time per invoice through targeted outreach and process optimization.",
        "Executed change management frameworks to streamline migration of Finance operations in Oracle ERP by creating and tracking Project Charter, RACI Matrix, Work Breakdown Structure (WBS) and Risk Log using MS Excel.",
        "Onboarded and trained 100-member global team to support process migration, standardization and documentation.",
        "Led the development of 45 VBA-based automation solutions collaborating with Oracle analytics team, documented each in 6 project charters to reduce manual workload."
      ],
      skills: ["ABBYY OCR", "ML", "Power BI", "DAX", "SQL", "VBA", "Oracle ERP", "Change Management", "Team Leadership"],
      clients: ["FedEx", "Kaiser Permanente"]
    }
  ];

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
      {/* Section Title */}
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: 800,
          textAlign: 'center',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: '#333'
        }}
      >
        Work Experience
      </h2>

      {/* Experience Cards */}
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="experience-card"
          style={{
            background: 'white',
            borderRadius: '15px',
            padding: '3rem',
            marginBottom: '2rem',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
            borderLeft: '4px solid #667eea',
            transition: 'all 0.3s ease'
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
              {experience.location && (
                <div
                  style={{
                    fontSize: '1rem',
                    color: '#666',
                    marginBottom: '0.5rem'
                  }}
                >
                  📍 {experience.location}
                </div>
              )}
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

          {/* Client Information (if available) */}
          {experience.clients && (
            <div
              style={{
                fontFamily: 'italic',
                color: '#666',
                marginBottom: '1.5rem',
                padding: '1rem',
                background: 'rgba(102, 126, 234, 0.05)',
                borderRadius: '8px',
                borderLeft: '3px solid #667eea'
              }}
            >
              <strong>Clients:</strong> {experience.clients.join(', ')}
            </div>
          )}

          {/* Achievements */}
          <div className="achievements-section">
            <h4
              style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#333',
                marginBottom: '1.5rem'
              }}
            >
              Key Achievements
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}
            >
              {experience.achievements.map((achievement, achievementIndex) => (
                <li
                  key={achievementIndex}
                  style={{
                    position: 'relative',
                    paddingLeft: '2rem',
                    marginBottom: '1.2rem',
                    lineHeight: 1.6,
                    color: '#555'
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
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          {experience.skills && (
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #eee'
              }}
            >
              <h4
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '1rem'
                }}
              >
                Technologies & Skills
              </h4>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: '0.3rem 0.8rem',
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                      border: '1px solid rgba(102, 126, 234, 0.3)',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      color: '#667eea',
                      fontWeight: '500'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Overall Skills Highlight */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
          borderRadius: '15px'
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
          Expertise Summary
        </h4>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#667eea',
                marginBottom: '0.5rem'
              }}
            >
              4+
            </div>
            <div
              style={{
                color: '#666',
                fontWeight: '500'
              }}
            >
              Companies
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#667eea',
                marginBottom: '0.5rem'
              }}
            >
              5+ yrs
            </div>
            <div
              style={{
                color: '#666',
                fontWeight: '500'
              }}
            >
              Experience
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#667eea',
                marginBottom: '0.5rem'
              }}
            >
              20+
            </div>
            <div
              style={{
                color: '#666',
                fontWeight: '500'
              }}
            >
              Technologies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;