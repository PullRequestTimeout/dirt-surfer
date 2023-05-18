import React from "react"
import { Card, Typography } from "@mui/material"
import WeatherIcon from "./WeatherIcon"

export default function WeatherCard({weatherCode, tempMin, tempMax}) {
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            placeItems: 'center',
            p: 3,
            font: 20,
        }}>
            <WeatherIcon weatherCode={weatherCode} />
            <Typography>{Math.trunc(tempMin)} / {Math.trunc(tempMax)}</Typography>
        </Card>
    )
}