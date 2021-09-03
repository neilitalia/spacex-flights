import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="About">
      <h1>About this project</h1>
      <p>This is a conceptual interplanetary flight booking app for SpaceX, in a parallel universe where flights out of our home planet can be booked as easily as flights across countries. Our future depends on our ability to explore other areas of the universe.</p>
      <h2 className="credits-header">Credits</h2>
      <ul className="credits-list">
        <li>
          <a href="https://www.spacex.com/">
            SpaceX
          </a>
        </li>
        <li>
          <a href="https://icons8.com/icons/windows">
            Icons8
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react">
            React Scrolling
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render">
            React Rerendering
          </a>
        </li>
        <li>
          <a href="https://goqr.me/api/">
            QR Code Generation
          </a>
        </li>
      </ul>
      <h2 className="connect-header">Links</h2>
      <ul className="connect-list">
        <li>
          <a href="https://www.linkedin.com/in/neilitalia/">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/neilitalia/spacex-flights">
            Github
          </a>
        </li>
        <li>
          <a href="https://trello.com/b/PpDimXDN/spacex-flights">
            Trello
          </a>
        </li>
      </ul>
    </div>
  )
}

export default About