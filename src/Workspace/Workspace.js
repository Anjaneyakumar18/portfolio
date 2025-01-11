import './Workspace.css';

export default function Workspace() {
  return (
    <section className="workspace-section">
      <h2 className="workspace-title">My Workspace</h2>

      {/* Section 1: GitHub Repositories */}
      <div className="workspace-container">
        <div className="workspace-box">
          <h3 className="workspace-subtitle">GitHub Repositories</h3>
          <div className="repository-list">
            <div className="repository-item">
              <img
              src="https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg"
                alt="Data Science Repository"
                className="repository-image"
              />
              <div className="repository-info">
                <strong>1. Data Science Repository</strong>
                <p>A collection of data science projects, including machine learning models, data analysis, and visualizations.</p>
                <button
                  className="repository-button"
                  onClick={() => window.open('https://github.com/Anjaneyakumar18/DATA-SCIENCE-PYTHON', '_blank')}
                >
                  Visit Repository
                </button>
              </div>
            </div>

            <div className="repository-item">
              <img
                src="https://th.bing.com/th/id/OIP.PXNp62LLV-aLT2ZUpHupZgHaHw?rs=1&pid=ImgDetMain" 
                className="repository-image"
              />
              <div className="repository-info">
                <strong>2. Python Complete Guide</strong>
                <p>A comprehensive Python guide, covering various Python libraries, concepts, and tutorials.</p>
                <button
                  className="repository-button"
                  onClick={() => window.open('https://github.com/Anjaneyakumar18/Python-CompleteGuide', '_blank')}
                >
                  Visit Repository
                </button>
              </div>
            </div>

            <div className="repository-item">
              <img
                src="https://wallpapercave.com/wp/wp9165322.png"
                alt="Data Structures and Algorithms"
                className="repository-image"
              />
              <div className="repository-info">
                <strong>3. Data Structures and Algorithms</strong>
                <p>A repository dedicated to implementing data structures and algorithms in Python.</p>
                <button
                  className="repository-button"
                  onClick={() => window.open('https://github.com/Anjaneyakumar18/Data-Structures-and-algorithms', '_blank')}
                >
                  Visit Repository
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Projects */}
        <div className="workspace-box">
          <h3 className="workspace-subtitle">Projects</h3>
          <div className="project-list">
            <div className="project-item">
              <img
                src="https://th.bing.com/th/id/OIP.vXvMRHbd3u0oYC0iAboxogHaHa?rs=1&pid=ImgDetMain" 
                alt="Live Sports Application"
                className="project-image"
              />
              <div className="project-info">
                <strong>1. Live Sports Application</strong>
                <p>A real-time sports application built using React, Node.js, MySQL, and Express, showing live scores and match data.</p>
                <button
                  className="project-button"
                  onClick={() => window.open('https://github.com/yourusername/live-sports-app', '_blank')}
                >
                  Visit Project
                </button>
              </div>
            </div>

            <div className="project-item">
              <img
                src="https://cdn2.vectorstock.com/i/1000x1000/06/81/bus-logo-silhouette-vector-31350681.jpg" // Replace with actual image URL
                alt="Online Bus Booking"
                className="project-image"
              />
              <div className="project-info">
                <strong>2. Online Bus Booking</strong>
                <p>A full-fledged bus booking system where users can book buses, check schedules, and more.</p>
                <button
                  className="project-button"
                  onClick={() => window.open('https://www.linkedin.com/posts/anjaneya-kumar-ramisetty-8663362b0_webdevlopment-busbookingsystem-mysql-activity-7229797207175049216-48H-?utm_source=share&utm_medium=member_desktop', '_blank')}
                >
                  Visit Project
                </button>
              </div>
            </div>

            <div className="project-item">
              <img
                src="https://marketplace.canva.com/EAFf9pTh3kg/1/0/1131w/canva-black-and-white-simple-portfolio-cover-page-BRYRBdWQKVU.jpg" // Replace with actual image URL
                alt="Portfolio Website"
                className="project-image"
              />
              <div className="project-info">
                <strong>3. Portfolio Website</strong>
                <p>My personal portfolio built using React, showcasing my skills, projects, and achievements.</p>
                <button
                  className="project-button"
                  onClick={() => window.open('https://github.com/Anjaneyakumar18/portfolio', '_blank')}
                >
                  Visit Project
                </button>
              </div>
            </div>

            <div className="project-item">
              <img
                src="https://1.bp.blogspot.com/-GRNuxO0n9ys/YG_wiYUHCnI/AAAAAAAAbh0/ZciwwXqrm_sLU3fMhLHz_HgFwa0oKG_dgCNcBGAsYHQ/s577/oops-IN-JAVA.png" // Replace with actual image URL
                alt="Management System with OOPs in Python"
                className="project-image"
              />
              <div className="project-info">
                <strong>4. Management System with OOPs in Python</strong>
                <p>An object-oriented Python application that simulates a management system.</p>
                <button
                  className="project-button"
                  onClick={() => window.open('https://github.com/Anjaneyakumar18/Python-CompleteGuide/tree/main/8.Oops', '_blank')}
                >
                  Visit Project
                </button>
              </div>
            </div>

            <div className="project-item">
              <img
                src="https://th.bing.com/th/id/OIP.Ghmn_fgGxDr-HmmdU8X5TwHaD4?rs=1&pid=ImgDetMain" // Replace with actual image URL
                alt="Front-End Games"
                className="project-image"
              />
              <div className="project-info">
                <strong>5. Front-End Games</strong>
                <p>A collection of fun games including a Box Game, Love Calculator, Drums, Dice, and more, built with JavaScript.</p>
                <button
                  className="project-button"
                  onClick={() => window.open('https://github.com/Anjaneyakumar18/front-end-games', '_blank')}
                >
                  Visit Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
