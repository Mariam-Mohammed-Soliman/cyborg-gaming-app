import Button from '../Buttons/Button';
import './Hero.scss';

const Hero = () => {
  return (
    <div id='HeroComponent'>
      <div className="HeroContent">
        <p className='text-capitalize'>
            welcome to cyborg
        </p>
        <div className="h1 text-uppercase heroTitle">
            <span>browse</span> our popular games here
        </div>
        <div className='browseBtn'>
          <Button btnName="browse now"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
