import './Home.css';

export default function Home() {
  return (
    <>
      <div className='other-than-cover'>
        <section className="home-head">
          <div className="home-image-container">
            <img src="https://raw.githubusercontent.com/Anjaneyakumar18/portfolio/main/images/ak2.jpg
" alt="Anjaneya Kumar" className="home-image" />
          </div>
          <h1 className="home-name-title">HI! I am Anjaneya Kumar Ramisetty</h1>
          <div className="home-basic-box">
            B.Tech Grad'2026 | Narasaraopet Engineering College | CSE |
            Data science and web development enthusiast | Leetcode 500(DSA-Python) | Databases-MySQL
          </div><br/>
          <br/>
          <a className='resume' href="https://github.com/Anjaneyakumar18/portfolio/raw/main/images/ak_resume.docx
">Resume</a>

        </section>
        <section className="home-about-section">
          <h2 className="home-section-title">Overview</h2>
          <p className="home-about-description">
            Hello! I am Anjaneya Kumar Ramisetty, a passionate B.Tech student from Narasaraopet Engineering College, currently in my pre final year (2026). I have a deep interest in Data Science, Web Development, and Problem Solving.
            I enjoy working with data to derive meaningful insights and create scalable web applications that solve real-world problems. My hobbies include playing cricket, watching movies, and reading books.
            I am always eager to learn new skills and take on new challenges to improve my problem-solving and technical abilities.
          </p>
        </section>

        {/* Hobbies Section */}
        <section className="home-hobbies-section">
          <h2 className="home-section-title">My Hobbies</h2>
          <div className="home-hobbies-container">
            <div className="home-hobby-box">
              <h3>Playing Cricket</h3>
              <p>I am a sports enthusiast. I love playing and watching cricket. Virat Kohli is my favorite cricket player.</p>
            </div>
            <div className="home-hobby-box">
              <h3>Watching Movies</h3>
              <p>I enjoy watching films, especially science fiction and thriller movies. I also love watching web series. Christopher Nolan and Shekhar Kammula are my favorite directors.</p>
            </div>
            <div className="home-hobby-box">
              <h3>Reading Books</h3>
              <p>I am an avid book reader. I have amazing books such as "The Power of Your Subconscious Mind," "Time Management," etc., on my shelf.</p>
            </div>
          </div>
        </section>

        <section className="home-personal-skills-section">
          <h2 className="home-section-title">Skills & Personal Attributes</h2>
          <ul style={{marginLeft:"-10px"}}>
            <li>Teamwork</li>
            <li>Will Power</li>
            <li>Time Management</li>
            <li>Critical Thinking</li>
          </ul>
        </section>
        
      </div>
    </>
  );
}
