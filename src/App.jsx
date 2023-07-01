import React, { useEffect, useState } from "react"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline, Typography, createTheme, Container, Paper } from "@mui/material"
import Header from "./components/Header"
import TrailList from "./components/TrailList"
import WeatherWidget from "./components/WeatherWidget"

function App() {
    // CSS Theme
    const theme = createTheme({
        palette: {
            mode: "dark",
        },
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
                    <Typography sx={{ m: "1rem 0" }} variant="h5" component="h6">
                        Forecast
                    </Typography>

                    <Paper
                        elevation={3}
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            placeItems: "center",
                            justifyContent: "space-between",
                            p: 4,
                        }}
                    >
                        <WeatherWidget src={selectedCity} />
                    </Paper>
                </Container>

                <Container>
                    <Typography sx={{ m: "1rem 0" }} variant="h5" component="h6">
                        Trails
                    </Typography>
                    <Paper
                        elevation={3}
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 2,
                            // flexDirection: 'column',
                            placeItems: "center",
                            justifyContent: "space-between",
                            p: 4,
                        }}
                    >
                        <TrailList src={selectedCity} />
                    </Paper>
                </Container>
            </main>
        </ThemeProvider>
    )
}

export default App
