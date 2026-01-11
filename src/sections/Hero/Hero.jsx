import './Hero.scss'
import profileImage from "../../assets/images/photo.jpg";
import Typography from '../../ui-components/Typography/Typography';
import Button from '../../ui-components/Button/Button';

function Hero() {
  return (
    <div className="hero">
      <div className="developer-image-wrapper">
        <img className="profile-image" src={profileImage} alt="profile-image" />
      </div>
      <div className="hero-content">
        <Typography as="h1" type="heading-xl" className="hero-title">Nice to <br className="break"/> meet you! <br className="break-2"/>I’m <span className='green-underline'>Mihai Hiticaș.</span></Typography>
        <Typography type="body" className="hero-subtitle">Based in Timișoara, Romania. I’m a front-end developer passionate about building accessible web apps that users love.</Typography>
        <a href="mailto:hiticasmihai7@gmail.com">
          <Button aria-label="Contact">
            <Typography as="span" type="body-btn">Contact me</Typography>
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero