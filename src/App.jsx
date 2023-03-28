import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'

function App() {

  const [selectedCity, setSelectedCity] = useState("Rossland")

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value)
  }

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App
