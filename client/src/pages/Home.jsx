import React, {useRef} from 'react'
import './Home.css'
import EarliestFlight from '../components/EarliestFlight'
import Header from '../components/Header'

const Home = () => {

  const endOfPage = useRef(null)

  const scrollToEnd = () => {
    endOfPage.current?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div className="Home">
      <Header scrollToEnd={scrollToEnd}/>
      <EarliestFlight endOfPage={endOfPage} />
    </div>
  )
}

export default Home
