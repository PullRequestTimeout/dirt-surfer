import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import TrailList from './components/trail-list/TrailList'

function App() {

  const [selectedCity, setSelectedCity] = useState("Rossland")
  let trailSource = selectedCity.toLowerCase()

  // Dynamically adjusts fetch request based on selected option in dropdown. This will be moved to an external API eventually.
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value)
    trailSource = event.target.value.toLowerCase()
  }

  return (
    <main className="App">
      <Header selectedCity={selectedCity} onChange={handleCityChange} />
      <TrailList src={trailSource} />
    </main>
  )
}

export default App
