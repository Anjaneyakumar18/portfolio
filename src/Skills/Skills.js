import './Skills.css';

export default function Skills() {
  return (
    <section className="skills-section">
      <h1 className="skills-title">My Skills</h1>

      <div className="skills-container">
        <div 
          className="skills-box data-science" 
          style={{ backgroundImage: 'url(https://www.marktechpost.com/wp-content/uploads/2022/10/Blog-Banner-1-3.jpg)' }}
        >
          <div className="overlay"></div>
          <h2>Data Science Skills</h2>
          <p className="skills-description">
            Transforming data into actionable insights to solve complex problems using statistical models, machine learning, data manipulation, and visualization techniques.
          </p>
          <ul className="skills-list">
            <li><span className="skill-icon">📊</span> Python</li>
            <li><span className="skill-icon">🗄️</span> SQL</li>
            <li><span className="skill-icon">📉</span> Statistics</li>
            <li><span className="skill-icon">🔢</span> Probability</li>
            <li><span className="skill-icon">🔧</span> NumPy</li>
            <li><span className="skill-icon">📊</span> Pandas</li>
            <li><span className="skill-icon">📈</span> Matplotlib</li>
          </ul>
        </div>

        {/* Web Development Box */}
        <div 
          className="skills-box web-development" 
          style={{ backgroundImage: 'url(https://wallpaperbat.com/img/641219-react-js-wallpaper-top-free-react-js-background.jpg)' }}
        >
          <div className="overlay"></div>
          <h2>Web Development Skills</h2>
          <p className="skills-description">
            Developing scalable, responsive, and dynamic web applications with a focus on both front-end and back-end technologies, including databases.
          </p>
          <ul className="skills-list">
            <li><span className="skill-icon">⚛️</span> React</li>
            <li><span className="skill-icon">💻</span> JavaScript</li>
            <li><span className="skill-icon">🌐</span> HTML & CSS</li>
            <li><span className="skill-icon">🧑‍💻</span> Node.js</li>
            <li><span className="skill-icon">🗃️</span> MySQL</li>
          </ul>
        </div>

        {/* Computer Science Fundamentals Box */}
        <div 
          className="skills-box computer-science" 
          style={{ backgroundImage: 'url(https://images.hdqwalls.com/wallpapers/windows-10-dark-logo-4k-m0.jpg)' }} // Replace with actual image
        >
          <div className="overlay"></div>
          <h2>Computer Science Fundamentals</h2>
          <p className="skills-description">
            Understanding the core principles of computer science including algorithms, data structures, and software engineering.
          </p>
          <ul className="skills-list">
            <li><span className="skill-icon">🔢</span> Algorithms</li>
            <li><span className="skill-icon">📚</span> Data Structures</li>
            <li><span className="skill-icon">📅</span> Data bases</li>
            <li><span className="skill-icon">💾</span> Operating Systems fundamentals</li>
            <li><span className="skill-icon">🛜</span> Computer networks fundamentals</li>
            <li><span className='skill-icon'>💻</span> Software engineering fundamentals</li>
          </ul>
        </div>
      </div>

      <div className="certifications-boxes">
        <div className="certifications-box data-science-certification">
          <h3>Data Science Certifications</h3>
          <p>Mastering data science techniques, including machine learning, data manipulation, and statistical analysis.</p>
          <div className="certification-images">
          <p className='certificate-name'><p>Python for Data analysis</p></p>
            <img src="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/Screenshot%202025-01-11%20182316.png"
 alt="Data Science Certification 1" />
 <p className='certificate-name'><p>Data visualization job simulation-Accenture</p></p>
            <img src="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/Screenshot%202025-01-11%20182232.png"
 alt="Data Science Certification 1" />
 

            <p className='certificate-name'><p>Python-NPTEL-65%</p></p>
            <img src="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/Screenshot%202025-01-10%20195456.png
" alt="Data Science Certification 1" />
            <p className='certificate-name'><p>SQL-Hackerrank</p></p>
            <img src="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/Screenshot%202025-01-10%20195807.png
" alt="Data Science Certification 2" />
            <p className='certificate-name'><p>Statistics and Probability - MyGreatLearning</p></p>
            <img src="https://img.freepik.cojvhm/premium-photo/data-scienceinspired-wallpaper-depicting-visual-modern-process-data-collection-cleaning_636705-15105.jpg" alt="Coming -up need to be updated" />
          </div>
        </div>

        <div className="certifications-box webdev-certification">
          <h3>Web Development Certifications</h3>
          <p>Comprehensive certifications in web development, covering both front-end and back-end technologies, including databases.</p>
          <div className="certification-images">
            <p className='certificate-name'>Web Development - Udemy</p>
            <img src="" alt="yet to be uploaded" />
            <p className='certificate-name'>JavaScript - HackerRank</p>
            <img src="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/Screenshot%202025-01-11%20182545.png

" alt="Web Development Certification 2" />
            <p className='certificate-name'>React - Spring board</p>
            <img src="" alt="need to be uploaded" />
          </div>
        </div>

        <div className="certifications-box cs-fundamentals-certification">
          <h3>Computer Science Fundamentals Certifications</h3>
          <p>Certifications on foundational computer science concepts including algorithms, data structures, and systems design.</p>
          <div className="certification-images">
            <p className='certificate-name'>Data structures - Springboard</p>
            <img src="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/Screenshot%202025-01-11%20182155.png" alt="CS Fundamentals Certification 1" />
            <p className='certificate-name'>OOPS-Python - Spring board</p>
            <img src="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/Screenshot%202025-01-11%20184249.png" alt="CS Fundamentals Certification 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
