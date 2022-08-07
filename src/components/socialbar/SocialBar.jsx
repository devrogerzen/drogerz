import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import "./SocialBar.css";

const SocialBar = () => {
  return (
    <ul className="social-nav_ul">
      <li className="social-nav_li">
        <FaLinkedin />
      </li>
      <li className="social-nav_li">
        <FaGithubSquare />
      </li>
      <li className="social-nav_li">
        <FaWhatsappSquare />
      </li>
    </ul>
  );
};

export default SocialBar;
