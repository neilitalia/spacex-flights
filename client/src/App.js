import './App.css'
import EarliestFlight from './components/EarliestFlight'
import Header from './components/Header'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <EarliestFlight />
    </div>
  )
}

export default App
