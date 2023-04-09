import React from "react";
import { Typography, Accordion } from '@mui/material'

export default function TrailList({ src }) {
    fetch(`../../data/${src}-trails.json`)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => data.forEach(trail => {
            // console.log(trail.trailName)
            // Loop through each of the array items and input each of them into the custom accordion elements
        }))
}