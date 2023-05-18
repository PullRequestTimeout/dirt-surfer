import React, { useEffect, useState } from "react";
import trailDataCall from "../utils/trailDataCall.js"
import { Typography, Accordion, Box, CircularProgress } from '@mui/material'

export default function TrailList({ src }) {
    const [trailData, setTrailData] = useState([])
    const [forecastData, setForecastData] = useState([])

    // trailDataCall(src)

    // This nested fetch is a workaround for the fact that the trail data and forecast data are stored in separate databases.
    useEffect(() => {
        fetch(`http://localhost:6969/trails/${src}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }})
        .then((res) => res.json())
        .then((data) => setTrailData(data))
        .then(() => console.log(trailData))
        .then(() => {
            fetch(`http://localhost:6969/forecasts/${src}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }})
                .then((res) => res.json())
                .then((data) => setForecastData(data))
                .then(() => console.log(forecastData))
        })
    }, [src])

    if (trailData.length > 0) {
        return trailData.map((trail, index) => {
            // Replace this with a TrailCard component
            return <h2>{trail.trailName}</h2>
        })
    } else {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }
}