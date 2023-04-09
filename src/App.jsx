import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Typography, createTheme, Container } from '@mui/material'
import Header from './components/header/Header'
import TrailList from './components/trailList/TrailList'
import WeatherWidget from './components/weatherWidget/WeatherWidget'


function App() {
  // CSS Theme
  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  })

  // Dynamically adjusts fetch request based on selected option in dropdown. This will be moved to an external API eventually.
  const [selectedCity, setSelectedCity] = useState("Rossland")
  let trailSource = selectedCity.toLowerCase()
  // Raised state from select value within the Header element
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
        <Container>
          <Typography variant='h3' component='h3'>Forecast</Typography>
          <WeatherWidget src={trailSource} />
        </Container>
        <Typography></Typography>
        <TrailList src={trailSource} />
      </main>
    </ThemeProvider>
  )
}

export default App
