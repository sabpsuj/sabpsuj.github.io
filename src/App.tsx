import './App.scss'
import LinkedInIcon from './assets/icons/linkedin.svg';
import GitHubIcon from './assets/icons/github.svg';
import MediumIcon from './assets/icons/medium.svg';
import MyAvatar from './assets/images/sabina_frog.jpeg';

function App() {

  return (
    <>
      <div className="container">
        <img className="avatar" src={MyAvatar} alt="Sabina in frog hat" />
        <div className="bio">
          <p>Hi, I am Sabina. I'm a front-end developer who codes in React daily and runs long distances for fun—basically, I debug by day and chase marathon dreams after hours.</p>
          <p>I like to <span className="tooltip" onClick={()=>{}}>KISS<span className="tooltiptext">stands for <b>K</b>eep <b>I</b>t <b>S</b>imple <b>S</b>tupid</span></span> so I made this personal site <span className="tooltip" onClick={()=>{}}>ASAP<span className="tooltiptext">stands for <b>A</b>s<b> S</b>oon <b>A</b>s <b>P</b>ossible or/and for me <b>A</b>s <b>S</b>imple <b>A</b>s <b>P</b>ossible </span></span> to give you a chance to contact me.</p>   
        </div>
        <div className="buttons">
          <a className="button" href="https://www.linkedin.com/in/psujsabina/" target="_blank">
            <img src={LinkedInIcon} alt="LinkedIn" />
            LinkedIn
          </a>
          <a className="button" href="https://github.com/sabpsuj" target="_blank">
            <img src={GitHubIcon} alt="Github" />
            Github
          </a>
          <a className="button" href="https://wordle.sabinapsuj.dev/" target="_blank">
            <span className="wordle-icon">w</span>
            My Wordle
          </a>
          <a className="button" href="https://medium.com/@sabinapsuj" target="_blank">
            <img src={MediumIcon} alt="Medium" />
            Medium
          </a>
        </div>
      </div>
      <footer>Made with 🐸 by Sabina Psuj</footer>
    </>
  )
}

export default App
