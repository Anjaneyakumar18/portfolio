import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'; 

export default function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-content">
        <p>
          Feel free to reach out to me via the platforms listed below. I'm always open to discussing new opportunities, collaborating on projects, or simply connecting with like-minded individuals.
        </p>

        <div className="social-links">
          <a href="https://github.com/Anjaneyakumar18" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/anjaneya-kumar-ramisetty-8663362b0/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={40} />
          </a>
          <a href="https://www.instagram.com/ak_naidu_18/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram size={40} />
          </a>
        
          <a href="https://x.com/Ak_naidu_18?mx=2" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaTwitter size={40} />
          </a>
        </div>
      </div>
    </section>
  );
}
