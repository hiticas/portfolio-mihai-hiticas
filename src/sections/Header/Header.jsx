import Typography from '../../ui-components/Typography/Typography'
import './Header.scss'

import iconGithub from "../../assets/images/icon-github.svg";
import iconFrontendMentor from "../../assets/images/icon-frontend-mentor.svg";
import iconLinkedin from "../../assets/images/icon-linkedin.svg";

function Header() {
  return (
    <div className="header">
      <Typography className="developer-name" as="h3" type="heading-m">Mihai Hiticaș</Typography>
      <div className="social-icons">
        <a href="https://github.com/hiticas" target="_blank">
          <img className="social-icon" src={iconGithub} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/mihai-hiticas/" target="_blank">
          <img className="social-icon" src={iconLinkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.frontendmentor.io/profile/hiticas" target="_blank">
          <img className="social-icon" src={iconFrontendMentor} alt="Frontend Mentor" />
        </a>
      </div>
    </div>
  )
}

export default Header