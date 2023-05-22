import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from '@mui/material'
import TrailCard from "./TrailCard";

export default function TrailList({ src }) {
    const [trailData, setTrailData] = useState([])
    const [forecastData, setForecastData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // This nested fetch is a workaround for the fact that the trail and forecast data are stored in separate databases.
    useEffect(() => {
        setIsLoading(true)
        fetch(`http://127.0.0.1:6969/trails/${src}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }})
        .then((res) => res.json())
        .then((data) => setTrailData(data))
        .then(() => {
            fetch(`http://127.0.0.1:6969/forecasts/${src}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }})
                .then((res) => res.json())
                .then((data) => setForecastData(data))
                .then(() => setIsLoading(false))
        })
    }, [src])

    if (!isLoading) {
        // Run a sorting function on the objects first
        return trailData.map((trail, index) => {
            return (
                <TrailCard key={index} trailName={trail.trailName} difficulty={trail.difficulty} starRating={trail.starRating} description={trail.description} descriptiveForecast={forecastData.find(({ trailName }) => trailName === `${trail.trailName
                }`).descriptiveForecast} />
            )
        })
    } else {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }
}