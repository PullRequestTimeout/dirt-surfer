import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Typography, createTheme, Container } from '@mui/material'
import Header from './components/Header'
import TrailList from './components/TrailList'
import WeatherWidget from './components/WeatherWidget'


function App() {
  // CSS Theme
  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  })

  // Dynamically adjusts fetch request based on selected option in dropdown.
  const [selectedCity, setSelectedCity] = useState("rossland")
  // Raised state from select value within the Header element
  const handleCityChange = (city) => {
    setSelectedCity(city)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="App">
        <Header handleCityChange={handleCityChange} />
        
        <Container>
          <Typography variant='h6' component='h6'>Forecast</Typography>
          <WeatherWidget src={selectedCity} />
        </Container>
        
        <Container>
          <Typography variant='h6' component='h6'>Trails</Typography>
          <TrailList src={selectedCity} />
        </Container>
      </main>
    </ThemeProvider>
  )
}

export default App
