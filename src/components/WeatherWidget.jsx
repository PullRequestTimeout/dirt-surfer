import React, { useEffect, useState } from "react";
import weatherDataCall from "../utils/weatherCall.js";
import WeatherCard from "./WeatherCard.jsx";
import { Divider, Paper, CircularProgress, Box } from '@mui/material'

export default function WeatherWidget({ src }) {
    // console.log("Weather Source: " + src)
    const [weatherData, setWeatherData] = useState({})

    useEffect(() => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${locationCoords(src).lat}&longitude=${locationCoords(src).long}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles`)
            .then(res => res.json())
            .then(data => {
                setWeatherData(data)
                console.log(data.daily)
            })
    }, [src])

    if (Object.keys(weatherData).length > 0) {

        function formatWeatherData(data) {
            const result = []
            const daysCount = data.daily.time.length
        
            for (let i = 0; i < daysCount; i++) {
                result.push({
                    date: data.daily.time[i],
                    max_temperature: Math.trunc(data.daily.temperature_2m_max[i]),
                    min_temperature: Math.trunc(data.daily.temperature_2m_min[i]),
                    weathercode: data.daily.weathercode[i]
                })
            }
        
            return result
        }

        const formattedWeatherData = formatWeatherData(weatherData)
        console.log(formattedWeatherData)

        return (
            formattedWeatherData.map((day, index) => {
                return (
                    <WeatherCard key={index} weatherCode={day.weathercode} tempMin={day.min_temperature} tempMax={day.max_temperature} />
                )
            })
        )
    } else {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }
    
}

function locationCoords(location) {
    switch (location) {
        case "rossland":
            return {
                lat: "49.08",
                long: "-117.80",
            }
        case "trail":
            return {
                lat: "49.10",
                long: "-117.70",
            }
        case "castlegar":
            return {
                lat: "49.32",
                long: "-117.66",
            }
    }
}

{/* <Divider orientation="vertical" variant="middle" flexItem /> */ }