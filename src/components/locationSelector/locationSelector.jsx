import * as React from 'react';
// import { useEffect, useState } from 'react'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LocationSelector({ handleCityChange }) {
    const [location, setLocation] = React.useState("Rossland");

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    React.useEffect(() => {
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
                <MenuItem value={"Rossland"}>Rossland</MenuItem>
                <MenuItem value={"Trail"}>Trail</MenuItem>
                <MenuItem value={"Castlegar"}>Castlegar</MenuItem>
            </Select>
        </FormControl >
    );
}