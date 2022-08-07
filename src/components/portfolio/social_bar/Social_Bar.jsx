import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import "./Social_Bar.css";

const Social_Bar = () => {
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

export default Social_Bar;
