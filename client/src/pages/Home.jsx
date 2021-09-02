import React, {useRef} from 'react'
import EarliestFlight from '../components/EarliestFlight'
import Header from '../components/Header'

const Home = () => {

  const endOfPage = useRef(null)

  const scrollToEnd = () => {
    endOfPage.current?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <div>
      <Header scrollToEnd={scrollToEnd}/>
      <EarliestFlight endOfPage={endOfPage} />
    </div>
  )
}

export default Home
