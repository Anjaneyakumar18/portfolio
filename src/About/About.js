import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <h1 className="about-title">About Me</h1>

      <div className="about-content">
        <p>
          Hello! I'm Anjaneya Kumar Ramisetty, passionate about Data Science and Web Development with a strong understanding of computer science fundamentals and hands-on experience in programming.
        </p>
        <p>
          I am about to complete my undergraduate studies at Narasaraopeta Engineering College by 2026 in the Computer Science and Engineering stream. I have a strong interest in Data Science and Web Development.
        </p>
      </div>

      <div className="education-section">
        <h2 className="education-title">Education</h2>

        <div className="education-container">
          <div className="education-card">
            <img
              src="https://th.bing.com/th/id/OIP.yiPjuNo62CK7U284VXcokgAAAA?rs=1&pid=ImgDetMain" // Replace with institution image
              alt="Narasaraopeta Engineering College"
              className="education-image"
            />
            <div className="education-info">
              <h3 className="institution-name">Narasaraopeta Engineering College</h3>
              <p className="education-course">Bachelor of Technology in Computer Science</p>
              <p className="education-percentage">CGPA: 8.45</p>
            </div>
          </div>

          <div className="education-card">
            <img
              src="https://th.bing.com/th/id/R.97536129fc23cba5e029ed121087eb94?rik=Zz3TCGpFpFakmA&riu=http%3a%2f%2fhyderabadboss.com%2fwp-content%2fuploads%2f2016%2f10%2fsri-chaitanya.jpg&ehk=UPeUPYrBz1Bm2HVwm84N2R1OHnVQOaMGVTecVPUyMq8%3d&risl=&pid=ImgRaw&r=0" // Replace with institution image
              alt="Sri Chaitnya Jr College"
              className="education-image"
            />
            <div className="education-info">
              <h3 className="institution-name">Sri Chaitnya Jr College, Chilakaluripet</h3>
              <p className="education-course">Intermediate</p>
              <p className="education-percentage">Percentage: 94%<br/> EAMCET:17314</p>
            </div>
          </div>

          <div className="education-card">
            <img
              src="https://play-lh.googleusercontent.com/0y8isdldL6U_XnaCKkUO7lbElqgUfdBZjT6iwTNTo2fKCoyFESBkZBY-vnzW825VHaQ"
              alt="Royal High School Martur"
              className="education-image"
            />
            <div className="education-info">
              <h3 className="institution-name">Royal High School, Martur</h3>
              <p className="education-course">SSC</p>
              <p className="education-percentage">GPA: 10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
