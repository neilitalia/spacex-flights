import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'
import './App.css'
import Flights from './pages/Flights'
import Tickets from './pages/Tickets'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/flights" component={Flights} />
        <Route path="/tickets" component={Tickets} />
      </Switch>
    </div>
  )
}

export default App
