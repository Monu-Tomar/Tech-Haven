import { FaFirefoxBrowser, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <div className="address">
          <h2>Tech Haven</h2>
          <a href="#">
            <FaLocationDot /> Noida, Uttar Pradesh
          </a>
          <a href="mailto:monusinghtomar107@gmail.com">
            <FaMailBulk /> monusinghtomar107@gmail.com
          </a>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <a href="https://www.linkedin.com/in/monu-tomar-bb6432249/">
            <FaLinkedin /> LinkedIn - Monu Tomar
          </a>
          <a href="https://github.com/Monu-Tomar">
            <FaGithub /> Github - Monu Tomar
          </a>
          <a href="https://portfolio-mu-six-12.vercel.app/">
            <FaFirefoxBrowser /> Personal Portfolio
          </a>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} <span> Monu Tomar</span>. All rights reserved</p>
    </footer>
  );
};

export default Footer;
