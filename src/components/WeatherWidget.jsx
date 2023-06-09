import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard.jsx";
import { CircularProgress, Box } from '@mui/material'

export default function WeatherWidget({ src }) {
    const [weatherData, setWeatherData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const currentDay = new Date().getDay();

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${locationCoords(src).lat}&longitude=${locationCoords(src).long}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles`)
            .then(res => res.json())
            .then(data => {
                setWeatherData(data)
                console.log(data.daily)
            })
            .then(() => setIsLoading(false))
    }, [src])

    if (!isLoading) {

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
                    <WeatherCard key={index} weatherCode={day.weathercode} tempMin={day.min_temperature} tempMax={day.max_temperature} day={getFutureDay(currentDay, index)} />
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

// Coordinates needed to be added to this as the app scales.
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

function getFutureDay(currentDayIndex, index) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const futureDayIndex = (currentDayIndex + index) % 7;
    return daysOfWeek[futureDayIndex];
}
