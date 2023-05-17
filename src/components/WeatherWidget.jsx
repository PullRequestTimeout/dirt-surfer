import React from "react";
import weatherDataCall from "../utils/weatherCall.js";
import { Divider, Paper } from '@mui/material'

export default function WeatherWidget({ src }) {
    // console.log("Weather Source: " + src)
    weatherDataCall(src)
    return (
        <Paper elevation={3} sx={{
            flexGrow: 1,
            height: 128,
            display: 'flex',
            placeItems: 'center',
            justifyContent: 'space-evenly'
        }}>
            {/* Loop over the last 5 days of the weather data and insert icons and data into components, with divider below in between */}
            {/* Call a new date object and loop forward through the week to assign names */}
        </Paper>
    )
}


{/* <Divider orientation="vertical" variant="middle" flexItem /> */ }