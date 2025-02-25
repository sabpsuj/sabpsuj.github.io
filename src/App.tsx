import './App.scss'
import LinkedInIcon from './assets/icons/linkedin.svg';
import GitHubIcon from './assets/icons/github.svg';
import MediumIcon from './assets/icons/medium.svg';
import MyAvatar from './assets/images/sabina_frog.jpeg';
import { Button } from './components/Button';
import { PrivacyModal } from './components/PrivacyModal';
import { useState } from 'react';

const buttons = [
  {
    link: "https://www.linkedin.com/in/psujsabina/",
    label: "LinkedIn",
    icon: {
      src: LinkedInIcon,
      altText: "LinkedIn"
    }
  },
  {
    link: "https://github.com/sabpsuj",
    label: "Github",
    icon: {
      src: GitHubIcon,
      altText: "Github"
    }
  },
  {
    link: "https://wordle.sabinapsuj.dev/",
    label: "My Wordle",
    icon: null,
    iconClass: "wordle-icon",
    iconLetter: "w"
  },
  {
    link: "https://medium.com/@sabinapsuj",
    label: "Medium",
    icon: {
      src: MediumIcon,
      altText: "Medium"
    }
  }
]

const privacyAccepted = localStorage.getItem("privacyAccepted")


function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(!privacyAccepted)

  const handleClosePrivacyModal = () => {
    setIsPrivacyModalOpen(false)
    localStorage.setItem("privacyAccepted", "true")
  }

  const handleOpenPrivacyModal = () => {
    setIsPrivacyModalOpen(true)
  }

  return (
    <>
      <div className="container">
        <img className="avatar" src={MyAvatar} alt="Sabina in frog hat" />
        <div className="bio">
          <p>Hi, I am Sabina. I'm a front-end developer who codes in React daily and runs long distances for fun—basically, I debug by day and chase marathon dreams after hours.</p>
          <p>I like to <span className="tooltip" onClick={()=>{}}>KISS<span className="tooltiptext">stands for <b>K</b>eep <b>I</b>t <b>S</b>imple <b>S</b>tupid</span></span> so I made this personal site <span className="tooltip" onClick={()=>{}}>ASAP<span className="tooltiptext">stands for <b>A</b>s<b> S</b>oon <b>A</b>s <b>P</b>ossible or/and for me <b>A</b>s <b>S</b>imple <b>A</b>s <b>P</b>ossible </span></span> to give you a chance to contact me.</p>   
        </div>
        <div className="buttons">
          {buttons.map(({link, label, icon, iconClass, iconLetter}) => (
              <Button
                key={label}
                link={link}
                label={label}
                icon={icon}
                iconClass={iconClass}
                iconLetter={iconLetter}
              />
            )
          )}
        </div>
      </div>
      <footer><div>Made with 🐸 by Sabina Psuj</div><button onClick={handleOpenPrivacyModal}>Privacy Info</button></footer>
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={handleClosePrivacyModal} />
    </>
  )
}

export default App
