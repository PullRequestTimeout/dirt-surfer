import React from "react"
import { Card, Typography } from "@mui/material"
import WeatherIcon from "./WeatherIcon"

export default function WeatherCard({weatherCode, tempMin, tempMax, day}) {
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            placeItems: 'center',
            p: 3,
            font: 20,
        }}>
            <Typography sx={{fontSize: 18}}>{day}</Typography>
            <WeatherIcon size={80} color={"#fff"} weatherCode={weatherCode} />
            <Typography sx={{fontSize: 18}}>{Math.trunc(tempMin)}°C / {Math.trunc(tempMax)}°C</Typography>
        </Card>
    )
}