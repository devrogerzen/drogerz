import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import "./SocialBar.css";

const SocialBar = () => {
  return (
    <ul className="social-nav_ul">
      <li className="social-nav_li">
        <a
          className="bar-icons"
          href="https://www.linkedin.com/in/roger-jimenez-3929149b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="social-nav_li">
        <a
          className="bar-icons"
          href="https://github.com/devrogerzen"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      </li>
      <li className="social-nav_li">
        <a
          className="bar-icons"
          href="https://api.whatsapp.com/send?phone=5491122551352"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsappSquare />
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
