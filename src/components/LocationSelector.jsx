import React, { useEffect, useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

export default function LocationSelector({ handleCityChange }) {
    const [location, setLocation] = useState("rossland");

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    useEffect(() => {
        handleCityChange(location);
    }, [location])

    return (
        <FormControl sx={{
            m: 2,
            minWidth: 160
        }}>
            <InputLabel id="location-selector-label">Location</InputLabel>
            <Select
                labelId="location-selector-label"
                id="location-selctor"
                value={location}
                label="Location"
                onChange={handleChange}

            >
                <MenuItem value={"rossland"}>Rossland</MenuItem>
                <MenuItem value={"trail"}>Trail</MenuItem>
                <MenuItem value={"castlegar"}>Castlegar</MenuItem>
            </Select>
        </FormControl >
    );
}