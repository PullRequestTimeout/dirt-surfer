import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import TrailList from './components/trail-list/TrailList'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'

function App() {

  // CSS Theme
  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  })

  // Dynamically adjusts fetch request based on selected option in dropdown. This will be moved to an external API eventually.
  const [selectedCity, setSelectedCity] = useState("")
  let trailSource = selectedCity.toLowerCase()

  const handleCityChange = (city) => {
    setSelectedCity(city)
    trailSource = city.toLowerCase()
  }


  // Every time selectedCity changes, runs internal function
  useEffect(() => {
    console.log(selectedCity)
  }, [selectedCity])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="App">

        <Header handleCityChange={handleCityChange} />
        <TrailList src={trailSource} />
      </main>
    </ThemeProvider>
  )
}

export default App
